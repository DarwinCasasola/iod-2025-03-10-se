/* function Person(name, age) {
this.name = name;
this.age = age;
this.human = true;
} */

// Constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;

    this.canDrive = function () {
        return this.age >= 16;
    };
}

// Create Person 1
const person1 = new Person("Alice", 22);
// Create Person 2
const person2 = new Person("Bob", 14);
// Print both persons & their canDrive status
console.log("Person 1", person1);
console.log("Can Alice drive?", person1.canDrive());

console.log("Person 2", person2);
console.log("Can Bob drive?", person2.canDrive());

// Class
class PersonClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.human = true;
    }

    canDrive() {
        return this.age >= 16;
    }
}

// Create Third Person
const person3 = new PersonClass("Charlie", 18);

// Print Third Person & their canDrive status
console.log("Person 3", person3);
console.log("Can Charlie drive?", person3.canDrive());
