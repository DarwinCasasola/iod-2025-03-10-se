const fs = require("fs");

let book = JSON.parse(fs.readFileSync("exercise6.json", "utf8"));

console.log("Book Title: " + book.title);
console.log("Book Description: " + book.description);
console.log("Book Genre: " + book.genre);
console.log("Book Author: " + book.author);

console.log("Whole Book Object: ", book);

book.description =
    "This is a fiction novel of a person who suffers from skitozophrenia. He gets a job at a supermarket and falls in love but his mind plays tricks on him.";
console.log("Updated Book Description: " + book.description);
