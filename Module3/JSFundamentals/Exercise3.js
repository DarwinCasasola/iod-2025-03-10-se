/*
3. Which of the following console.log messages will print?
 Why?

if (0) console.log('#1 zero is true')
if ("0") console.log('#2 zero is true')
if (null) console.log('null is true')
if (-1) console.log('negative is true')
if (1) console.log('positive is true')

*/

if (0) console.log("#1 zero is true"); /*
wont print due to 0 being falsy. Evaluates to false and will not print */
if ("0") console.log("#2 zero is true"); /*
the string "0" is a truthy value is JS and will print..basically the condition evaluates to true */
if (null) console.log("null is true"); /*
null is falsy value in JavaScript and will not print */
if (-1) console.log("negative is true"); /*
Any non-zero number in JavaScript is a truthy value...including negative numbers. So this will print */
if (1) console.log("positive is true"); /*
1 is also a truthy value in JavaScript and will print */
