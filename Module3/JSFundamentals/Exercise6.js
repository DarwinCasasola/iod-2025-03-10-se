const westley = {
    name: "Westley",
    numFingers: 5
};
const rugen = {
    name: "Count Rugen",
    numFingers: 6
};
const inigo = {
    firstName: "Inigo",
    lastName: "Montoya", //Added lastName property.
    greeting(person) {
        let greeting = `Hello, ${person.name}, my name is ${this.firstName} ${this.lastName}. `;
        console.log(greeting + this.getCatchPhrase(person));
    },
    //Updated getCatchPhrase with arrow function and cond. operator.
    getCatchPhrase: (person) =>
        person.numFingers === 6 ? "You killed my father. Prepare to die!" : "Nice to meet you."
};

//Testing Westley and Rugen

inigo.greeting(westley); //Output: Hello, Westley, my name is Inigo Montoya. Nice to meet you.
inigo.greeting(rugen); //Output: Hello, Count Rugen, my name is Inigo Montoya. You killed my father. Prepare to die!
