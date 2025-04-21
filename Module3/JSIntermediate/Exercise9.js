// --- Given salaries object ---
let salaries = {
    Timothy: 35000,
    David: 25000,
    Mary: 55000,
    Christina: 75000,
    James: 43000
};

// --- a) sumSalaries(): Calculate total salaries ---
function sumSalaries(salaries) {
    let total = 0;
    for (let salary of Object.values(salaries)) {
        total += salary;
    }
    return total;
}

// --- b) topEarner(): Return name of highest earner ---
function topEarner(salaries) {
    let maxSalary = 0;
    let topPerson = "";

    for (let [name, salary] of Object.entries(salaries)) {
        if (salary > maxSalary) {
            maxSalary = salary;
            topPerson = name;
        }
    }

    return topPerson;
}

// --- Test Output ---
console.log("--- Total Salary ---");
console.log(sumSalaries(salaries)); // Expected: 233000

console.log("\n--- Top Earner ---");
console.log(topEarner(salaries)); // Expected: Christina
