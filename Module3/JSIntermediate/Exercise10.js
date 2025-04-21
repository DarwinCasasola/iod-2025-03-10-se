// --- Current time ---
const today = new Date();

console.log("Current time is " + today.toLocaleTimeString());
console.log(today.getHours() + " hours have passed so far today");

// --- a) Total minutes passed today ---
const totalMinutes = today.getHours() * 60 + today.getMinutes();
console.log(totalMinutes + " minutes have passed so far today");

// --- b) Total seconds passed today ---
const totalSeconds = totalMinutes * 60 + today.getSeconds();
console.log(totalSeconds + " seconds have passed so far today");

// --- c) Calculate your age
const birthDate = new Date("1998-10-30"); // (YYYY-MM-DD)
const now = new Date();

let ageYears = now.getFullYear() - birthDate.getFullYear();
let ageMonths = now.getMonth() - birthDate.getMonth();
let ageDays = now.getDate() - birthDate.getDate();

if (ageDays < 0) {
    ageMonths -= 1;
    const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    ageDays += lastMonth.getDate();
}
if (ageMonths < 0) {
    ageYears -= 1;
    ageMonths += 12;
}

console.log(`I am ${ageYears} years, ${ageMonths} months, and ${ageDays} days old.`);

// --- d) Function to calculate days between two dates ---
function daysInBetween(date1, date2) {
    const d1 = new Date(date1);
    const d2 = new Date(date2);

    const diffTime = Math.abs(d2 - d1); // Difference in milliseconds
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
}

// --- Test daysInBetween ---
const dateA = "2023-01-01";
const dateB = "2024-01-01";
console.log(`Days between ${dateA} and ${dateB}: ${daysInBetween(dateA, dateB)} days`);
