/*
const sydney = {
name: 'Sydney',
population: 5_121_000,
state: 'NSW',
founded: '26 January 1788',
timezone:
}
*/

//Function to print city info using a for...in loop
function printCityInfo(city) {
    for (let key in city) {
        console.log(`${key}: ${city[key]}`);
    }
}

//Sydney Object
const sydney = {
    name: "Sydney",
    population: 5_121_000,
    state: "NSW",
    founded: "26 January 1788",
    timezone: "Australia/Sydney"
};
//Test the function with the Sydney object
console.log("--Sydney Info--");
printCityInfo(sydney);

//New City-London
const london = {
    name: "London",
    population: 8_982_000,
    state: "England",
    founded: "43 AD",
    timezone: "Europe/London"
};
//Testing London
console.log("--London Info--");
printCityInfo(london);
