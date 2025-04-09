/*
function getGreeting(name) {
    return 'Hello ' + name + '!';
  }
  */

// Test 1: Function Expression
const getGreeting1 = function (name) {
    return "Hello " + name + "!";
};
console.log(getGreeting1("Darwin")); //Output: Hello Darwin!

// Test 2: Arrow Function
const getGreeting2 = (name) => {
    return "Hello " + name + "!";
};
console.log(getGreeting2("Darwin")); //Output: Hello Darwin!
// Test 3: Arrow Function with Implicit Return
const getGreeting3 = (name) => "Hello " + name + "!";
console.log(getGreeting3("Darwin")); //Output: Hello Darwin!
