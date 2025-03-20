// Addition
function add(a, b) {
    return a + b;
}
// Subtraction
function subtract(a, b) {
    return a - b;
}
// Multiplication
function multiply(a, b) {
    return a * b;
}
// Division
function divide(a, b) {
    if (b === 0) {
        return "Error: Division by zero";
    } else {
        return a / b;
    }
}

// Testing Functions
let a = 14;
let b = 7;

console.log("Addition: " + add(a, b));
console.log("Subtraction: " + subtract(a, b));
console.log("Multiplication: " + multiply(a, b));
console.log("Division: " + divide(a, b));
