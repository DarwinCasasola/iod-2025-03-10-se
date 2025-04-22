//Debounce Decorator
function debounce(func, ms) {
    let timeoutId;

    return function (...args) {
        clearTimeout(timeoutId); //Cancel scheduled call
        timeoutId = setTimeout(() => {
            func(...args); //only the latest call executes
        }, ms);
    };
}

//Debounced Function
function printMe(msg) {
    console.log(`printing debounced message: ${msg}`);
}

//Apply Debounce with a 1000ms (1s) delay
printMe = debounce(printMe, 1000);

//Fire 3 quick calls
setTimeout(() => printMe("Message 1"), 100);
setTimeout(() => printMe("Message 2"), 200);
setTimeout(() => printMe("Message 3"), 300);
//Only the last message will be printed after 1 second
