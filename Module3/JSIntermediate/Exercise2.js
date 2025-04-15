//Version using "if" statement
function truncate(str, max) {
    if (str.length > max) {
        return str.slice(0, max - 3) + "...";
    } else {
        return str;
    }
}

//Version using conditional (ternary) operator
function truncateTernary(str, max) {
    return str.length > max ? str.slice(0, max - 3) + "..." : str;
}

//Testing
const testStr = "This text will be truncated if it too long";

console.log("Using if statement:");
console.log(truncate(testStr, 25));
console.log("Using Ternary operator:");
console.log(truncateTernary(testStr, 25));
