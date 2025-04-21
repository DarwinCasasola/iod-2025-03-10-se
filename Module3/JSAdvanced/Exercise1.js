// --- a) Basic makeCounter function ---
function makeCounter() {
    let currentCount = 0;
    return function () {
        currentCount++;
        console.log(currentCount);
        return currentCount;
    };
}

// --- a) Create second counter counter2 ---
let counter1 = makeCounter();
let counter2 = makeCounter();

counter1(); // 1
counter1(); // 2
counter2(); // 1 (independent from counter1)
counter2(); // 2 (independent from counter1)

// --- b) Modify makeCounter to take startFrom argument ---
function makeCounterWithStart(startFrom = 0) {
    let currentCount = startFrom;
    return function () {
        currentCount++;
        console.log(currentCount);
        return currentCount;
    };
}

// Create counter starting from 5
let counter3 = makeCounterWithStart(5);
counter3(); // 6
counter3(); // 7

// --- c) Modify makeCounter to take incrementBy argument ---
function makeCounterWithIncrement(startFrom = 0, incrementBy = 1) {
    let currentCount = startFrom;
    return function () {
        currentCount += incrementBy;
        console.log(currentCount);
        return currentCount;
    };
}

// Create counter starting from 0, incrementing by 2
let counter4 = makeCounterWithIncrement(0, 2);
counter4(); // 2
counter4(); // 4

// Create counter starting from 10, incrementing by 5
let counter5 = makeCounterWithIncrement(10, 5);
counter5(); // 15
counter5(); // 20
