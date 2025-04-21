// --- Array of book objects ---
const books = [
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { id: 3, title: "1984", author: "George Orwell", year: 1949 },
    { id: 4, title: "Brave New World", author: "Aldous Huxley", year: 1932 },
    { id: 5, title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 }
];

// --- a) getBookTitle(bookId): uses find to get title by id ---
function getBookTitle(bookId) {
    const book = books.find((b) => b.id === bookId);
    return book ? book.title : "Book not found";
}

// --- b) getOldBooks(): uses filter to return books before 1950 ---
function getOldBooks() {
    return books.filter((book) => book.year < 1950);
}

// --- c) addGenre(): uses map to add a genre property ---
function addGenre() {
    return books.map((book) => ({ ...book, genre: "classic" }));
}

// --- d) getTitles(authorInitial): uses filter + map for authors by initial ---
function getTitles(authorInitial) {
    return books.filter((book) => book.author.startsWith(authorInitial)).map((book) => book.title);
}

// --- e) latestBook(): uses forEach and find to get most recent book ---
function latestBook() {
    let latest = books[0];

    books.forEach((book) => {
        if (book.year > latest.year) {
            latest = book;
        }
    });

    return latest;
}

// --- Test Outputs ---
console.log("--- a) getBookTitle(3) ---");
console.log(getBookTitle(3)); // 1984

console.log("\n--- b) getOldBooks() ---");
console.log(getOldBooks());

console.log("\n--- c) addGenre() ---");
console.log(addGenre());

console.log('\n--- d) getTitles("G") ---');
console.log(getTitles("G")); // Should match 'George Orwell'

console.log("\n--- e) latestBook() ---");
console.log(latestBook()); // Should be "To Kill a Mockingbird" (1960)
