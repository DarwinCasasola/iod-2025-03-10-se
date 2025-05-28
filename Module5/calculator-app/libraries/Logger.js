class Logger {
    log(id, operation, result) {
        console.log(`[Calculator:${id}] Operation: ${operation} → Result: ${result}`);
    }
}

module.exports = Logger;
