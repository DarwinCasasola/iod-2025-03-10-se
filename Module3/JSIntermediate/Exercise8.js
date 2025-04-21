// --- a) Create a new phoneBookDEF Map ---
const phoneBookDEF = new Map();

// --- b) Initialise phoneBookDEF with entries (D, E, F names) ---
const defEntries = [
    ["Darwin", "0411000001"],
    ["Elena", "0411000002"],
    ["Franco", "0411000003"]
];
defEntries.forEach((entry) => phoneBookDEF.set(entry[0], entry[1]));

// --- Initial ABC Map ---
const phoneBookABC = new Map();
phoneBookABC.set("Annabelle", "0412312343");
phoneBookABC.set("Barry", "0433221117");
phoneBookABC.set("Caroline", "0455221182");

// --- c) Update the phone number for Caroline ---
phoneBookABC.set("Caroline", "0499999999"); // updated number

// --- d) Function to print names and numbers from a Map ---
function printPhoneBook(contacts) {
    console.log("--- Phone Book ---");
    contacts.forEach((number, name) => {
        console.log(`${name}: ${number}`);
    });
}

// --- e) Combine phoneBookABC and phoneBookDEF into phoneBook ---
const phoneBook = new Map([...phoneBookABC, ...phoneBookDEF]);

// --- f) Print full list of names in combined phone book ---
console.log("\n--- f) Full list of names ---");
console.log([...phoneBook.keys()]);

// --- Test Output ---
console.log("\n--- d) Print ABC phone book ---");
printPhoneBook(phoneBookABC);

console.log("\n--- d) Print DEF phone book ---");
printPhoneBook(phoneBookDEF);

console.log("\n--- d) Print Combined phone book ---");
printPhoneBook(phoneBook);
