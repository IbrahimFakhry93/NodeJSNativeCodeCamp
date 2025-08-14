//! Lec 05 Operators – Arithmetic

//~ x++ post-increment operator:
//* assignment first then increment
// Initialize the variable
var x = 5;

//* The current value of x (5) is assigned to the variable result first.
var result = x++;

//* After the assignment, the value of x is incremented by 1.
//* At this point, result holds the value 5, and x becomes 6.

// Output the values
console.log("Value of result: " + result); // Output: 5
console.log("Value of x: " + x); // Output: 6

//~ same for x--

//~ ++x pre-increment operator

//* increment first then assignment

// Initialize the variable
var x = 5;

//* The value of x is incremented by 1 first.
//* After the increment, the new value of x (6) is assigned to the variable result.
var result = ++x;

// Output the values
console.log("Value of result: " + result); // Output: 6
console.log("Value of x: " + x); // Output: 6

//~ same for --x

//* ======================================================================

//! Lec 06 Operators – Arithmetic – Priorities (Order of Operations)
// Initial expression
let result = 5 * 2 + 6 ** 2 - (9 / 3) * 4;

//* Explanation of the Evaluation Order:
//? 1. Parentheses: Evaluate expressions inside ( ... ) first.
//*    - Evaluate (9 / 3) which is 3.
//*    Expression becomes: 5 * 2 + 6 ** 2 - 3 * 4
//*
//? 2. Exponentiation (**): Evaluate next because it has the highest precedence
//*    among the remaining operators.
//*    - Evaluate 6 ** 2 which is 36.
//*    Expression becomes: 5 * 2 + 36 - 3 * 4
//*
//? 3. Multiplication and Division: Evaluate from left to right.
//*    - Evaluate 5 * 2 which is 10.
//*    - Evaluate 3 * 4 which is 12.
//*    Expression becomes: 10 + 36 - 12
//*
//? 4. Addition and Subtraction: Evaluate from left to right.
//*    - Evaluate 10 + 36 which is 46.
//*    - Evaluate 46 - 12 which is 34.
//* Final result: 34

console.log(result); // Output: 34

//! Title: Demonstrating operator precedence

//? Operator precedence determines the order in which operators are evaluated in an expression
//? In the expression now-1991 > now-2018,
//~ the subtraction operators(-) have higher precedence than the greater than operator(>), so they are evaluated first

let now = 2022;
let result4 = now - 1991 > now - 2018; //* 31 > 4

console.log(result4); //* Output: true

//? In the expression x = y = 25 - 10 - 5:
//* the subtraction operators(-) have higher precedence than the assignment operator(=),
//* so they are evaluated first

let x1, y1;
x1 = y1 = 25 - 10 - 5; //* x = y = 10

console.log(x1); //* Output: 10
console.log(y1); //* Output: 10

//* ======================================================================

//!  Lec 07 Operators – Arithmetic – hands-on

//* Any operator is just a function that executes a behavior
//* Operator is jut like a function, it must return a value

//! Lec 08 Operators – Assignments

// Initialize the variable
var x = 5;

//* The operator "+=" adds the value to the variable and assigns the result back to the variable.
//* For example: x = x + 3;
x += 3;

//* The operator "-=" subtracts the value from the variable and assigns the result back to the variable.
//* For example: x = x - 3;
x -= 3;

//* The operator "*=" multiplies the value with the variable and assigns the result back to the variable.
//* For example: x = x * 3;
x *= 3;

//* The operator "/=" divides the variable by the value and assigns the result back to the variable.
//* For example: x = x / 3;
x /= 3;

// Output the final value of x after all operations
console.log(x);

//~ Explanation:
//* Assignment operators allow you to perform arithmetic operations directly on a variable while assigning the new result back to it.

//* The process is efficient and saves time, especially when working with repetitive calculations.

//~ example
// Initialize a variable
var x = 5;

// Add and assign 3 to x
x += 3;

// Add and assign the sum of 3 and 2 to x
x += 3 + 2;

// This is equivalent to explicitly writing:
x = x + 3 + 2;

// Output the final value of x
console.log(x); //* 10

//*=============================================================================================================================

//! Lec 09 - Operators – Comparison

//* There are many comparison operators in JavaScript.
//* All of these operators return a boolean true or false value.

// Assignment example
let x = 5; // The "=" operator assigns the value 5 to the variable x

//~ (==) equal to operator

//* Comparison examples using the "==" operator (equal to operator)
//* The "==" operator is used to compare two values for equality.
//* It performs automatic type casting if the values have different types.

// Compare x with 5 (true because x equals 5)
console.log(x == 5); // Output: true

// Compare x with another variable (false if y is not equal to x)
let y = 10; // Assign value 10 to variable y
console.log(x == y); // Output: false

// Compare two strings with the same value (true because "5" equals "5")
console.log("5" == "5"); // Output: true

// Compare two numbers with the same value (true because 5 equals 5)
console.log(5 == 5); // Output: true

// Compare a number with a string containing the same value (true due to type casting)
console.log(5 == "5"); // Output: true

// Compare a number with a string containing a different value (false because values differ)
console.log(5 == "12"); // Output: false

//~  === (equal to value or type)

//* The "===" operator is a strict comparison operator.
//* It checks for both equal value and equal type without performing type casting.

// Compare two strings with the same value and type
console.log("5" === "5"); // Output: true

//* Explanation: Both operands are strings with the same value, so the result is true.

// Compare two numbers with the same value and type
console.log(5 === 5); // Output: true

//* Explanation: Both operands are numbers with the same value, so the result is true.

// Compare a number and a string with the same value but different types
console.log(5 === "5"); // Output: false

//* Explanation: The operands have the same value, but one is a number and the other is a string, so the result is false.

// Compare two numbers with different values
console.log(7 === 8); // Output: false

//* Explanation: The operands are both numbers but have different values, so the result is false.

//^ note:
//* In C# double equal operator (==) is same as triple equal operator (===) in JS

//~ != operator
//* The "!=" operator checks if two values are NOT equal.
//* It performs type casting before making the comparison.

// Example 1: Compare two strings with the same value
console.log("5" != "5"); // Output: false
//* Explanation: Both operands are strings with the same value, so the result is false.

// Example 2: Compare two numbers with the same value
console.log(5 != 5); // Output: false
//* Explanation: Both operands are numbers with the same value, so the result is false.

// Example 3: Compare a number and a string with the same value
console.log(5 != "5"); // Output: false
//* Explanation: Due to type casting, the number 5 is considered equal to the string "5", so the result is false.

// Example 4: Compare a number with a string containing a different value
console.log(5 != "12"); // Output: true
//* Explanation: The number 5 and the string "12" have different values, so the result is true.

//~ !== operator

//* strict comparison
//* no type casting

//* The "!== " operator is a strict inequality operator.
//* It checks whether two values are NOT equal both in value and type.
//* No type casting is performed, making it a precise way to compare values.

// Example 1: Compare two strings with the same value
console.log("5" !== "5"); // Output: false
//* Explanation: Both operands are strings with the same value, so the result is false.

// Example 2: Compare two numbers with the same value
console.log(5 !== 5); // Output: false
//* Explanation: Both operands are numbers with the same value and type, so the result is false.

// Example 3: Compare a number with a string containing the same value
console.log(5 !== "5"); // Output: true
//* Explanation: Although the value is the same, one operand is a number and the other is a string, so the result is true.

// Example 4: Compare two numbers with different values
console.log(7 !== 8); // Output: true
//* Explanation: The values are different, so the result is true.

//~ Example
let var1 = 5;
let var2 = "5";
if (var1 !== var2) console.log("The condition is true");
else console.log("The condition is false");
//* output: The condition is true

//~ ( < )

//* Node.js Comparison Operators Example

// let x = 5;
// let y = 10;

//* Less Than Operator (<)
console.log(x < y); // Output: true
//* Explanation: x (5) is less than y (10), so the result is true.

//* Less Than or Equal To Operator (<=)
console.log(x <= y); // Output: true
//* Explanation: x (5) is less than y (10), so the result is true.

//* Greater Than Operator (>)
console.log(x > y); // Output: false
//* Explanation: x (5) is not greater than y (10), so the result is false.

//* Greater Than or Equal To Operator (>=)
console.log(x >= y); // Output: false
//* Explanation: x (5) is neither greater than nor equal to y (10), so the result is false.

//*=============================================================================================================================

//! Comparison: Less Than

// Comparing numbers
console.log(5 < 3); // Output: false
//* Explanation: 5 is not less than 3, so the result is false.

console.log(6 < 7); // Output: true
//* Explanation: 6 is less than 7, so the result is true.

// Comparing a number with a string that can be converted to a number
console.log(3 < "5"); // Output: true
//* Explanation: The string "5" is converted to the number 5 for comparison. Since 3 is less than 5, the result is true.

// Comparing strings (based on Unicode values)
console.log("2" < "5"); // Output: true
//* Explanation: "2" and "5" are compared based on their Unicode values. Since "2" comes before "5", the result is true.

console.log("2" < "12"); // Output: false
//* Explanation: "2" and "12" are compared based on Unicode values. "2" comes before "1" in "12", so the result is false.

// Additional Information:
//* In comparisons between a number and a string, the string is converted to a number for the comparison.
//* In comparisons between two strings, the comparison is based on their Unicode values.

//*=============================================================================================================================

//! Algorithm for the "Less Than" (<) operator in JavaScript

// Example 1: Comparing two numbers
console.log(5 < 3); // Output: false
//* Explanation: 5 is not less than 3, so the result is false.

console.log(6 < 7); // Output: true
//* Explanation: 6 is less than 7, so the result is true.

// Example 2: Comparing a number with a string that can be converted to a number
console.log(3 < "5"); // Output: true
//* Explanation: The string "5" is converted to the number 5 before comparison. Since 3 is less than 5, the result is true.

// Example 3: Comparing two strings (based on Unicode values)
console.log("apple" < "banana"); // Output: true
//* Explanation: Strings are compared lexicographically using their Unicode values. "apple" comes before "banana".

console.log("2" < "12"); // Output: false
//* Explanation: Strings "2" and "12" are compared lexicographically. "2" comes after "1" in "12", so the result is false.

// Example 4: Comparing different data types
console.log(true < 1); // Output: true
//* Explanation: The boolean value `true` is converted to 1. Since 1 is not less than 1, the result is true.

console.log(false < 1); // Output: true
//* Explanation: The boolean value `false` is converted to 0. Since 0 is less than 1, the result is true.

//? Summary of Rules:
//* 1. When comparing a string with a number, the string is converted to a number.
//* 2. Strings are compared lexicographically using their Unicode values.
//* 3. Booleans are converted to 1 for `true` and 0 for `false` during comparison.

//~ example of comparison of twt strings:

console.log("2" < "12"); // Output: false
//* Explanation: Strings "2" and "12" are compared lexicographically. "2" comes after "1" in "12", so the result is false.

//? how? look at the function down

/**
 * Function to compare two strings to determine if one is less than the other
 * using their Unicode values, character by character.
 * @param {string} x - The first string to compare.
 * @param {string} y - The second string to compare.
 * @returns {boolean} - True if x is less than y, otherwise false.
 */
function isLessThan(x, y) {
  // Loop through each character in both strings up to the length of the shorter string.
  for (let i = 0; i < Math.min(x.length, y.length); i++) {
    // Get Unicode value of the current character in string x
    let cx = x.charCodeAt(i);
    // Get Unicode value of the current character in string y
    let cy = y.charCodeAt(i);

    // Compare Unicode values of the characters.
    if (cx < cy) {
      // If cx is less than cy, x is less than y.
      return true;
    } else if (cx > cy) {
      // If cx is greater than cy, x is not less than y.
      return false;
    }
  }

  // If all characters are equal, compare the lengths of the strings.
  if (x.length < y.length) {
    // If x is shorter, it is considered less.
    return true;
  } else {
    // Otherwise, x is not less than y.
    return false;
  }
}

// Example usage of the function
console.log(isLessThan("2", "12")); // Output: false
console.log(isLessThan("apple", "banana")); // Output: true

//! Explanation:
//* Character-by-Character Comparison:

// Each character in the strings is compared based on its Unicode value.

// The comparison stops as soon as a difference is found.

//* String Length Comparison:

// If all characters are equal, the shorter string is considered smaller.

//* Efficiency:

// This approach ensures that comparisons are precise and align with how strings are evaluated lexicographically in programming

//! Less Than (<) Operator Algorithm for Comparing Two Strings

// Initialize two strings
// let x = "45";
// let y = "456";

//* Step 1: Check if the length of x is less than the length of y.
if (x.length < y.length) {
  console.log(`${x} is less than ${y}`); // Output: true
} else {
  //* Step 2: If lengths are equal, compare character by character.
  for (let i = 0; i < Math.min(x.length, y.length); i++) {
    let cx = x.charCodeAt(i); // Unicode of the current character in x
    let cy = y.charCodeAt(i); // Unicode of the current character in y

    //* Compare Unicode values of the current characters
    if (cx < cy) {
      console.log(`${x} is less than ${y}`); // Output: true
      break; // Exit the loop as the result is determined
    } else if (cx > cy) {
      console.log(`${x} is greater than ${y}`); // Output: false
      break; // Exit the loop as the result is determined
    }
  }

  //* Step 3: If the loop ends without determining, check lengths again.
  if (x.length === y.length) {
    console.log(`${x} is equal to ${y}`); // Output: false
  }
}

//! Greater Than Operator Algorithm
//* x > y
//* swap x and y
//^ execute less than algorithm
//* y < x

//*=============================================================================================================================

//! Lec 10 - Logical Operator:
//~ && operator:

// A simple function that simulates heavy-duty processing
function heavyDutyFunction() {
  console.log("Heavy-duty function is being executed...");
  // Simulate a time-consuming operation with a loop
  for (let i = 0; i < 1e8; i++) {}
  return true;
}

// A quick condition that evaluates to false
let isValid = false;

// Using the && operator to combine the conditions
if (isValid && heavyDutyFunction()) {
  console.log("Both conditions are true!");
} else {
  console.log("Short-circuit occurred, heavy-duty function wasn't executed.");
}

//* Explanation:
//* - The `isValid` operand is placed first, and since it evaluates to false,
//*   the second operand (heavyDutyFunction) is never executed due to short-circuiting.
//* - This prevents unnecessary execution of time-consuming operations, making the code more efficient.

//*=============================================================================================================================

//! Lec 57 – Spread Operator

//* Spread Operator function is opposite of rest parameter

//* spread operator can be passed to a function call

//* spread operator applies on objects and arrays

//* spread operator extract properties of the object and elements of the array

//* spread operator must be used inside container like (...) or [...]

// let arr = [1, 2, 3];
// let another_array = [0, ...arr, 4, 5, 6];
// console.log(another_array);

//*=======================

// let arr = [1, 2, 3];
// console.log(arr);
// console.log(...arr);

// let arr_spread = [...arr];
// console.log(arr_spread);  //* arr_spread and arr are different arrays with different memory address

//*==========================

let person = {
  name: "ahmed",
  age: 16,
};

let per_arr = [...person]; //! error: person is not iterable
