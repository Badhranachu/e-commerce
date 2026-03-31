// This file is intentionally broken for testing purposes.
// It contains syntax errors, logical errors, and mock secret exposures.

function brokenFunction() {
    let a = 10;
    let b = 0;
    
    // Logical error: Division by zero
    let result = a / b;
    
    console.log("Mocking secret exposure for testing tools...");
    
    // Mocking an AWS secret exposure (DUMMY/FAKE)
    const MOCK_AWS_ACCESS_KEY_ID = "AKIAEXAMPLEFAKE12345";
    const MOCK_AWS_SECRET_ACCESS_KEY = "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY"; // THIS IS A WELL-KNOWN FAKE KEY
    
    console.log("Mock AWS ID: " + MOCK_AWS_ACCESS_KEY_ID);
    console.log("Mock Secret: " + MOCK_AWS_SECRET_ACCESS_KEY);

    // Syntax error follows (unclosed brace and missing semicolon)
    if (result > 0 {
        console.log("This will never run"
    
    // Unreachable code
    return result;
    console.log("Unreachable code");
}

brokenFunction();
