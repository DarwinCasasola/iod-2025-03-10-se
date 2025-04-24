// Decorator function to validate that all arguments are strings
function validateStringArg(fn) {
    return function (...args) {
        for (let arg of args) {
            if (typeof arg !== "string") {
                throw new Error("All arguments must be strings!");
            }
        }
        return fn(...args);
    };
}

// Extended orderItems function to handle multiple items
function orderItems(...itemNames) {
    return `Order placed for: ${itemNames.join(", ")}`;
}

// Decorate the function
const validatedOrderItem = validateStringArg(orderItems);

// Test cases with try-catch
try {
    console.log(validatedOrderItem("Apple Watch")); // OK
} catch (err) {
    console.error(err.message);
}

try {
    console.log(validatedOrderItem("iPhone", "iPad")); //  OK
} catch (err) {
    console.error(err.message);
}

try {
    console.log(validatedOrderItem("MacBook", 123)); //  Will throw an error
} catch (err) {
    console.error("Caught error:", err.message);
}
