// --- Explanation: Why .toFixed() returns wrong result ---
let twentyCents = 0.2;
let tenCents = 0.1;

let fixedTwenty = twentyCents.toFixed(2); // returns "0.20" (string)
let fixedTen = tenCents.toFixed(2); // returns "0.10" (string)

console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`); // 0.30000000000000004
console.log(fixedTwenty + fixedTen); // "0.200.10" (string concatenation)

// --- b) currencyAddition with 2 decimal safety ---
function currencyAddition(float1, float2) {
    const factor = 100;
    return (Math.round(float1 * factor) + Math.round(float2 * factor)) / factor;
}

// --- c) currencyOperation with +, -, *, / (2 decimals) ---
function currencyOperation(float1, float2, operation) {
    const factor = 100;
    const int1 = Math.round(float1 * factor);
    const int2 = Math.round(float2 * factor);
    let result;

    switch (operation) {
        case "+":
            result = int1 + int2;
            break;
        case "-":
            result = int1 - int2;
            break;
        case "*":
            result = Math.round((int1 * int2) / factor);
            break;
        case "/":
            result = Math.round((int1 / int2) * factor);
            break;
        default:
            throw new Error("Unsupported operation");
    }

    return result / factor;
}

// --- d) Extended currencyOperation with numDecimals support (1 to 10) ---
function currencyOperationExtended(float1, float2, operation, numDecimals = 2) {
    const factor = Math.pow(10, numDecimals);
    const int1 = Math.round(float1 * factor);
    const int2 = Math.round(float2 * factor);
    let result;

    switch (operation) {
        case "+":
            result = int1 + int2;
            break;
        case "-":
            result = int1 - int2;
            break;
        case "*":
            result = Math.round((int1 * int2) / factor);
            break;
        case "/":
            result = Math.round((int1 / int2) * factor);
            break;
        default:
            throw new Error("Unsupported operation");
    }

    return result / factor;
}

// --- Test Cases ---
console.log("\n--- Test Cases ---");

// b) currencyAddition tests
console.log("currencyAddition(0.1, 0.2):", currencyAddition(0.1, 0.2)); // 0.3
console.log("0.3 == currencyAddition(0.1, 0.2):", 0.3 === currencyAddition(0.1, 0.2)); // true

// c) currencyOperation tests
console.log('currencyOperation(0.1, 0.2, "+"):', currencyOperation(0.1, 0.2, "+")); // 0.3
console.log('currencyOperation(0.3, 0.1, "-"):', currencyOperation(0.3, 0.1, "-")); // 0.2
console.log('currencyOperation(0.2, 0.1, "*"):', currencyOperation(0.2, 0.1, "*")); // 0.02
console.log('currencyOperation(0.2, 0.1, "/"):', currencyOperation(0.2, 0.1, "/")); // 2
