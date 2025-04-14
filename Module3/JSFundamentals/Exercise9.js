//OG Variables
let teamSports = ["Hockey", "Cricket", "Volleyball"];
let dog1 = "Bingo";
let cat1 = { name: "Fluffy", breed: "Siberian" };

//Reference moreSports with teamSports
let moreSports = teamSports;
moreSports.push("Soccer");
moreSports.unshift("Rugby");

//Reference dog2 - assigned from dog1
let dog2 = dog1;
dog2 = "Yogi";

//Reference cat2 - assigned from cat1
let cat2 = cat1;
cat2.name = "Gato";

//Print OG to test changed
console.log("--- After reference assignments ---");
console.log("teamSports:", teamSports);
console.log("dog1:", dog1);
console.log("cat1:", cat1);

//Fixing issues
//Rest OG Variables

teamSports = ["Hockey", "Cricket", "Volleyball"];
cat1 = { name: "Fluffy", breed: "Siberian" };

//Correct way to create Independent copy of array
let moreSportsFixed = [...teamSports];
moreSportsFixed.push("Soccer");
moreSportsFixed.unshift("Rugby");

let cat2Fixed = { ...cat1 };
cat2Fixed.name = "Gato";

//Final Output
console.log("--- After fixing assignments ---");
console.log("teamSports:", teamSports);
console.log("moreSportsFixed:", moreSportsFixed);
console.log("cat1:", cat1);
console.log("cat2Fixed:", cat2Fixed);
