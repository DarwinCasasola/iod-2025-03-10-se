// Add delay method to all functions
Function.prototype.delay = function (ms) {
    const originalFunc = this;

    return function (...args) {
        setTimeout(() => {
            originalFunc.apply(this, args);
        }, ms);
    };
};

// Original 2-parameter multiply
function multiply(a, b) {
    console.log(a * b);
}

multiply.delay(500)(5, 5); // prints 25 after 500ms

// Extended 4-parameter version
function multiplyFour(a, b, c, d) {
    console.log(a * b * c * d);
}

multiplyFour.delay(3000)(2, 3, 4, 5); // prints 120 after 3 second
