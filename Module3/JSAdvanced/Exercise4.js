// --- 1. Using setInterval (runs forever) ---
function printFibonacci() {
    let a = 0,
        b = 1;

    const intervalId = setInterval(() => {
        console.log(`[Interval] ${b}`);
        [a, b] = [b, a + b];
    }, 1000);

    // Optional: stop after 10 numbers
    // let count = 0;
    // const max = 10;
    // const intervalId = setInterval(() => {
    //   if (count++ >= max) {
    //     clearInterval(intervalId);
    //     return;
    //   }
    //   console.log(`[Interval] ${b}`);
    //   [a, b] = [b, a + b];
    // }, 1000);
}

// --- 2. Using nested setTimeout (runs forever) ---
function printFibonacciTimeouts() {
    let a = 0,
        b = 1;

    function next() {
        console.log(`[Timeout] ${b}`);
        [a, b] = [b, a + b];
        setTimeout(next, 1000);
    }

    next();
}

// --- 3. Using nested setTimeout with a limit ---
function printFibonacciTimeoutsWithLimit(limit) {
    let a = 0,
        b = 14;
    let count = 0;

    function next() {
        if (count >= limit) return;
        console.log(`[Timeout + Limit] ${b}`);
        [a, b] = [b, a + b];
        count++;
        setTimeout(next, 1000);
    }

    next();
}

//

// Uncomment one at a time to test:

//1. Infinite loop with setInterval
//printFibonacci();

// 2. Infinite loop with nested setTimeout
//printFibonacciTimeouts();

// 3. Finite loop with nested setTimeout (e.g., 10 numbers)
//printFibonacciTimeoutsWithLimit(10);

// Note: The infinite loops will run indefinitely until you stop them manually.
// The finite loop will print 10 Fibonacci numbers and then stop.
