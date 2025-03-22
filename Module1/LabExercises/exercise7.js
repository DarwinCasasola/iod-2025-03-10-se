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

//Addition
console.log("Testing Addition");
console.log(add(2, 4)); //6
console.log(add(0, 0)); //0
console.log(add(-5, -10)); // -15

//Subtraction
console.log("Testing Subtraction");
console.log(subtract(12, 6)); //6
console.log(subtract(0, 0)); //0
console.log(subtract(-5, -10)); // 5

//Multiplication
console.log("Testing Multiplication");
console.log(multiply(2, 4)); //8
console.log(multiply(0, 0)); //0
console.log(multiply(-10, 5)); // -50

//Division
console.log("Testing Division");
console.log(divide(12, 6)); //2
console.log(divide(0, 0)); //Error: Division by zero
console.log(divide(-10, 5)); // -2
