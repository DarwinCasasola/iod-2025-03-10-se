const Logger = require("./Logger");

class Calculator {
    constructor() {
        this.id = Math.floor(Math.random() * 1_000_000); // random ID
        this.logger = new Logger();
    }

    #log(operation, result) {
        this.logger.log(this.id, operation, result);
    }

    add(num1, num2) {
        const result = num1 + num2;
        this.#log("add", result);
        return result;
    }

    subtract(num1, num2) {
        const result = num1 - num2;
        this.#log("subtract", result);
        return result;
    }

    multiply(num1, num2) {
        const result = num1 * num2;
        this.#log("multiply", result);
        return result;
    }

    divide(num1, num2) {
        if (num2 === 0) throw new Error("Cannot divide by zero.");
        const result = num1 / num2;
        this.#log("divide", result);
        return result;
    }
}

module.exports = Calculator;
