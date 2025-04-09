/* let a = 2 , b = 3;
let result = `${a} + ${b} is `;
if (a +b <10) {
    result += 'less than 10';
} else {
    result += '10 or greater';
}  */

// Test 1
let a = 2,
    b = 3;
let result = `${a} + ${b} is ` + (a + b < 10 ? "less than 10" : "10 or greater");
console.log(result); //Output "2 + 3 is less than 10"

// Test 2
a = 7;
b = 5;
result = `${a} + ${b} is ` + (a + b < 10 ? "less than 10" : "10 or greater");
console.log(result); //Output "7 + 5 is 10 or greater"

// Test 3
a = 1;
b = 8;
result = `${a} + ${b} is ` + (a + b < 10 ? "less than 10" : "10 or greater");
console.log(result); //Output "1 + 8 is less than 10"
