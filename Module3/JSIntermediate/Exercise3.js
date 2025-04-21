const animals = ["Tiger", "Giraffe"];
console.log("Original array:", animals);

//Add 2 new values to end
animals.push("Elephant", "Zebra");
console.log("After adding to the end:", animals);
//Add 2 new values to beginning
animals.unshift("Lion", "Panda");
console.log("After adding to the beginning:", animals);
//Sort Values Alphabetically
animals.sort();
console.log("After sorting alphabetically:", animals);
//Function to replace middle animal
function replaceMiddleAnimal(newValue) {
    const middleIndex = Math.floor(animals.length / 2);
    animals[middleIndex] = newValue;
    console.log(`After replacing middle animal with "${newValue}":`, animals);
}
replaceMiddleAnimal("Koala");
//Function to find animals starting with given string "case-insensitive"
function findMatchingAnimals(beginsWith) {
    const lowerCaseStart = beginsWith.toLowerCase();
    const matches = animals.filter((animal) => animal.toLowerCase().startsWith(lowerCaseStart));
    console.log(`Animals beginning with "${beginsWith}":`, matches);
    return matches;
}
findMatchingAnimals("p");
