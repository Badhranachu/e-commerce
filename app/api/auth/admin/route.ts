import { NextRequest, NextResponse } from 'next/server';

// Project stack: Next.js

const allowedOrigins = ['https://yourdomain.com']; // Replace with your allowed origins

export async function POST(request: NextRequest) {
  const { username, password } = await request.json();

  if (!username || !password) {
    return NextResponse.json({ error: 'Username and password are required' }, { status: 400 });
  }

  const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'admin';
  const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || '12345';

  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    const token = process.env.ADMIN_TOKEN; // Use an environment variable for the token
    return NextResponse.json({ success: true, token });
  }

  return NextResponse.json({ error: 'Invalid admin credentials' }, { status: 401 });
}

export async function GET(request: NextRequest) {
  const authHeader = request.headers.get('Authorization');
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const token = authHeader.split(' ')[1];
  if (token !== process.env.ADMIN_TOKEN) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
  }

  const origin = request.headers.get('Origin');
  if (allowedOrigins.includes(origin)) {
    return NextResponse.json({ message: 'Welcome to the admin area' }, { status: 200 });
  } else {
    return NextResponse.json({ error: 'CORS policy: No access from this origin' }, { status: 403 });
  }
}