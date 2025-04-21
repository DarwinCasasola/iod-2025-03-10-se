// --- Unique function using Set ---
function unique(duplicatesArray) {
    return [...new Set(duplicatesArray)];
}

// --- Alternative version using a loop (in case Set is not preferred/supported) ---
function uniqueWithLoop(duplicatesArray) {
    const result = [];
    for (let i = 0; i < duplicatesArray.length; i++) {
        if (!result.includes(duplicatesArray[i])) {
            result.push(duplicatesArray[i]);
        }
    }
    return result;
}

// --- Test Arrays ---
const colors = ["red", "green", "blue", "yellow", "orange", "red", "blue", "yellow"];
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43];
const mixedItems = ["apple", 42, "banana", 42, "apple", true, false, true];

// --- Test Outputs ---
console.log("--- Using Set ---");
console.log("Unique colors:", unique(colors));
console.log("Unique test scores:", unique(testScores));
console.log("Unique mixed items:", unique(mixedItems));

console.log("\n--- Using Loop ---");
console.log("Unique colors:", uniqueWithLoop(colors));
console.log("Unique test scores:", uniqueWithLoop(testScores));
console.log("Unique mixed items:", uniqueWithLoop(mixedItems));
