// Results with explanations

//1. Result: "10"...Explanation: Empty String "" will concatenate with 1. Resulting in "1" and then concatenated with "0" will give us "10"
//"" + 1 + 0
console.log("" + 1 + 0);

//2. Result: "-1"...Explanation: Empty String "" is converted to a number(0), and then subtract 1 from it resulting in -1
//"" - 1 + 0
console.log("" - 1 + 0);

//3. Result: "1" ...Explanation: true is coereced to 1 and false is 0. 1+0=1
//true + false
console.log(true + false);

//4. Result: false...Explanation: (!) of true is false
//!true;
console.log(!true);

//5. Result: "2"...Explanation: the string "3" is coerced to the number 3, and the 6 is divided by 3.
//6 / "3"
console.log(6 / "3");

//6. Result: "6"... Both strings 2 & 3 are coerced to numbers and then multiplied.
//"2" * "3";
console.log("2" * "3");

//7. Result: "9px"...4+5 is 9 and then px is concatenated to it.
//4 + 5 + "px";
console.log(4 + 5 + "px");

//8.Result: "$45"...the string "$" is concatenated with 4. Makes "$4" after the "$4" concatenates with 5, it becomes "$45"
//"$" + 4 + 5;
console.log("$" + 4 + 5);

//9. Result: "2"...String "4" is coerced to the number 4. so 4-2=2
//"4" - 2;
console.log("4" - 2);

//10. Result: "NaN" ... "4px" is string that cannot be converted into a valid number. So you can not subtract 2 from it.
//"4px" - 2;
console.log("4px" - 2);

//11. Result "-9 5"... "-9" is concatenated with 5. By using a "+" JS performs a string concatenation.
//" -9 " + 5;
console.log(" -9 " + 5);

//12. Result: "-14" ... String is "-9" is converted to number -9 and then 5 is subtracted from it.
//" -9 " - 5;
console.log(" -9 " - 5);

//13. Result: "1" ... null is coerced to 0. So 0+1=1
//null + 1;
console.log(null + 1);

//14. Result: Nan...undefined cannot be converted to a number, So adding 1 to it will result in NaN.
//undefined + 1;
console.log(undefined + 1);

//15. Result: true ... undefined and null are considered equal when using the loose equality operator (==).
//undefined == null;
console.log(undefined == null);

//16. Result: false ... Strict equality operator (===) checks both value and type. Undefined and null are different types so result will be False.
//undefined === null;
console.log(undefined === null);

//17. Result: -2... string " \t \n" is coerced to 0 when it cannot find a numerical value just an empty string when subtracted by2 it will equal 2
//" \t \n" - 2;
console.log(" \t \n" - 2);
