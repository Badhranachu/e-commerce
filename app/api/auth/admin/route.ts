import { NextRequest, NextResponse } from 'next/server';

// Project stack: Next.js

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