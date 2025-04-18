//* to run index.js
//* go to terminal: node index.js

//! Variables:

//* Before any processing, all variables must be stored in the memory called RAM (Random Access Memory).
//* The programming language initiates this request, which is then handled by the operating system.
//* The programming language, in collaboration with the operating system, further interacts with the hardware
//* to ensure that input or output data is stored in the memory (RAM) as required.

//* steps to create variable with value:
//* 1. declaration" var data
//* 2. initialization: var data = 5;
//? or:
//* var data;
//* data = 5;  intialization will be in a place in the middle of the code not right after the declaration

//? or:
//* var x , y, strData;
//* x = 2;
//* y = 3;
//* strData = ' this is string '

//? example:
//* var x , y, result;   Declaration
//* x = 2;               Assignment
//* y = 3;               Assignment
//* result = x + y;      usage

//? print value of these variables
// console.log(any_valid_line_of_code);
// console.log("text");
// console.log(variable_name);
// console.log(2 + 3);
// console.log(call_for_another_function);
// console.log(and_more);

//? valid forms for variable name:
//* var data_20 = 5;
//* var data_first =5;
//* var _data=5;
//* var $data=5;

//? var names are case sensitive:
//* var data=5;
//* var DATA=5;

//*=============================================================================================================================

//! Variables – hands-on

var data = 5; //* declaration
data = 10; //* assignment
console.log(data); //* usage

//*=============================================================================================================================

//! Variables cont in scope lesson 12

//* const variable: variable that can't be changed after initialization

//*=================================================================================================================

//! Declaration using var in different scopes

//~ Example 1:

//* Global Scope
var data = 5; // Declare a variable 'data' with the value 5 in the global scope.
var data = 6; // Redeclare the variable 'data' in the global scope (allowed with 'var', but not recommended).

//* Block Scope
{
  //* Accessing the variable before declaration in the block scope
  console.log(data); //* 6
  var data = 7; // Declare and assign a new value to 'data' in the block scope.
  console.log(data); // Output: 7 (the reassigned value within the block scope).
}

//* Function Scope
function displayData() {
  //* Accessing the variable before declaration in the function scope
  console.log(data); //~ Output: undefined (due to variable hoisting).
  var data = 8; // Declare and assign a new value to 'data' in the function scope.
  console.log(data); // Output: 8 (the reassigned value within the function scope).
}

displayData(); // Call the function to demonstrate function-scoped variable behavior.
console.log(data); // Output: 7 (the value reassigned in the block scope).

//~ Example 2:

var x = 5;

{
  console.log(x);
  var x = 6;
}

console.log(x);

//^ output:
// 5
// 6

var a = 3;

function first() {
  const b = 1;

  console.log(c); //* undefined

  if (true) {
    var c = 5;
    console.log(b);
  }

  console.log(c); //* 5
}

first();

//*=============================================================================================================================

//! Operators – Arithmetic

//~ x++ post-increment operator:

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

//! Operators – Arithmetic – Priorities (order of operations)
// Initial expression
let result = 5 * 2 + 6 ** 2 - (9 / 3) * 4;

//* Step 1: Evaluate parentheses first
//* (5 * 2) evaluates to 10
result = 10 + 6 ** 2 - (9 / 3) * 4;

//* Step 2: Handle exponentiation (^)
//* 6**2 (6 squared) evaluates to 36
result = 10 + 36 - (9 / 3) * 4;

//* Step 3: Perform division (/)
//* 9 / 3 evaluates to 3
result = 10 + 36 - 3 * 4;

//* Step 4: Perform multiplication (*)
//* 3 * 4 evaluates to 12
result = 10 + 36 - 12;

//* Step 5: Perform addition and subtraction (+ and -)
//* 10 + 36 evaluates to 46
//* 46 - 12 evaluates to 34
result = 34;

// Output the final result
console.log(result); // Output: 34

//* ======================================================================

//! Operators – Arithmetic – hands-on

//* Any operator is just a function that executes a behavior

//!  Operators – Assignments

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

//! Operators – Comparison
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

//! Logical Operator:
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
//! For loop:

//& Title: Execution Steps of a For Loop in JavaScript

//? Note: This example demonstrates the execution steps of a for loop
//? for(let i = 0; i < 6; i++) { console.log(i); }

/*
 * 1. Initialization:
 *    - The loop initializes the variable `i` to `0`.
 *    - This step only happens once at the beginning of the loop.
 */

//* for (let i = 0; i < 6; i++) {
/*
 * 2. Condition Check:
 *    - The loop checks the condition `i < 6`.
 *    - If the condition is `true`, the loop body executes. If `false`, the loop terminates.
 */

/*
 * 3. Loop Body Execution:
 *    - The code inside the loop (`console.log(i);`) is executed, printing the current value of `i` to the console.
 */

//* console.log(i);

/*
 * 4. Increment:
 *    - The `i++` statement increments the value of `i` by `1`.
 */

//* i++;
//* }

/*
 * 5. Repeat:
 *    - The loop repeats from step 2 (condition check) with the new value of `i`.
 */

/*
 * Detailed Iteration Breakdown:
 *
 * //? First Iteration:
 *    - Initialization: `let i = 0`
 *    - Condition Check: `i < 6` (0 < 6 → `true`)
 *    - Loop Body Execution: `console.log(0)` (prints `0`)
 *    - Increment: `i++` (i becomes `1`)
 *
 * //? Second Iteration:
 *    - Condition Check: `i < 6` (1 < 6 → `true`)
 *    - Loop Body Execution: `console.log(1)` (prints `1`)
 *    - Increment: `i++` (i becomes `2`)
 *
 * //? Third Iteration:
 *    - Condition Check: `i < 6` (2 < 6 → `true`)
 *    - Loop Body Execution: `console.log(2)` (prints `2`)
 *    - Increment: `i++` (i becomes `3`)
 *
 * //? Fourth Iteration:
 *    - Condition Check: `i < 6` (3 < 6 → `true`)
 *    - Loop Body Execution: `console.log(3)` (prints `3`)
 *    - Increment: `i++` (i becomes `4`)
 *
 * //? Fifth Iteration:
 *    - Condition Check: `i < 6` (4 < 6 → `true`)
 *    - Loop Body Execution: `console.log(4)` (prints `4`)
 *    - Increment: `i++` (i becomes `5`)
 *
 * //? Sixth Iteration:
 *    - Condition Check: `i < 6` (5 < 6 → `true`)
 *    - Loop Body Execution: `console.log(5)` (prints `5`)
 *    - Increment: `i++` (i becomes `6`)
 *
 * //? Termination:
 *    - Condition Check: `i < 6` (6 < 6 → `false`)
 *    - Since the condition is `false`, the loop terminates.
 */
//*==============================================

//~ Factorial of a number

//* 5! = 5 × 4 × 3 × 2 × 1 = 120
const n = 5; //* input
let fact = 1; //* output variable

//^ Processing
for (let i = 1; i <= n; i++) {
  fact *= i; //* fact = fact * i
}

//console.log(fact); //*output

//^ Processing
//^ We can start from 2 instead of 1 to save processing time since multiplying by 1 has no effect.
for (let i = 2; i <= n; i++) {
  fact *= i; //* fact = fact * i
}

// console.log(fact); //* Output: The factorial of n

//* starting from 2 eliminates one unnecessary iteration.
//* This optimization might seem minor but aligns with writing efficient code practices

//*==============================================

//! *** Abdo ****

// Finding prime numbers from 1 to n

//^  Input: Specify the value of n
//* input = n

//^ Prime number definition:
//* A prime number is a number that can only be divided by itself and 1

//^ Loop through numbers from 1 to n
//? for i in range(1, n):
//^    Loop through numbers from 2 to i to check divisibility
//?     for j in range(2, i):
//         if i % j == 0:
//*            If i is divisible by j, it is not a prime number
//             print(f"{i} is not a prime number")
//             break  # Exit the inner loop since i is not prime

//~ Prime numbers from 1 to n

//~ prime numbers between 1 and 10: 2, 3, 5, 7.

// (function () {
//   const n = 10;
//   for (let i = 1; i <= n; i++) {
//     let isPrime = true;
//     for (let j = 2; j < i; j++) {
//       if (i % j === 0) {
//         isPrime = false;
//           break;
//       }
//       if (isPrime) console.log(i);
//     }
//   }
// })();

// (function () {
//   const n = 10;
//   for (let i = 2; i <= n; i++) {
//     let counter = 0; //! my mistake that I didn't put the counter before the second loop, I put outside it gave me wrong
//     for (let j = 1; j <= i; j++) {
//       if (i % j === 0) counter++;
//     }
//     if (counter === 2) console.log(i);
//   }
// })();

//*============================================================================

//~ Ex to make gadwal el darb
// (function () {
//   const n = 2;

//   for (let i = 1; i <= 10; i += 2) {
//     console.log(`${n} * ${i} = ${n * i}`);
//   }
// })();

//~ Ex to print only even numbers

// (function () {
//   for (let i = 1; i <= 10; i++) {
//     if (i % 2 === 0) console.log(i);
//   }
// })();

//? or: use odd condition and use continue keyword

(function () {
  for (let i = 1; i <= 10; i++) {
    if (i % 2 === 1) continue;
    console.log(i);
  }
})();

//* break: break the whole loop
//* continue: break the current iteration and continue the loop

//~ Ex to print only odd numbers

console.log("================================");
// (function () {
//   for (let i = 1; i <= 10; i++) {
//     if (i % 2 === 1) console.log(i);
//   }
// })();

//~ ex to show nested loop
// (function () {
//   for (let i = 0; i < 5; i++) {
//     console.log(`i = ${i}`);
//     for (let j = 0; j < 5; j++) {
//       console.log(`${j}`);
//     }
//     console.log("============");
//   }
// })();

//~ ex gadwal el darb for different numbers but with nest loop

// (function () {
//   for (let i = 1; i <= 10; i++) {
//     console.log(`i = ${i}`);
//     for (let j = 1; j <= 10; j++) {
//       console.log(`${i} * ${j} = ${i * j}`);
//     }
//     console.log("============");
//   }
// })();

//! ask chatgpt about the completion value

//*============================================================================

//! Lexical Grammar:

//*=================================================

//! 21 – Array 01 – Introduction

// (function () {
var colors = ["Black", "White", "Grey", 10, "Red", 8, "Green"];
colors[2] = "Gray";
console.log(colors[2]);
console.log(colors.length);
console.log(colors[colors.length - 1]);
console.log(colors[3] + colors[5]);
console.log(colors[3] + colors[4]);

colors.push("Yellow");
//colors[colors.length] = "Yellow";
console.log(colors);
colors.unshift("Blue");
console.log(colors);

colors.shift();
// })();

//*=================================================
//! function

//* declaration function can be called inside its block again recursion
///* expression function can't apply that

//* hoisting is applied on declaration function
//* hoisting can't be applied on expression function
//! if usage before declaration,

//~ example:

(function () {
  function add(a, b) {
    let sum = a + b;
    console.log(sum);
  }

  console.log(add(2, 5) + add(2, 1)); //* NaN => undefined + undefined = NaN
  console.log(add(2, 5) < add(2, 1)); //* false
})();

//? undefined because there is no return value added to the function add above

//~ example: dynamic add function to add any numbers

(function () {
  //================
  function add(a, b) {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }
    return sum;
  }

  console.log(add(2, 3));
  console.log(add()); //* 5, JS is dynamic , it will work
  console.log(add());

  //=================
})();
//~ example: using rest operator to achieve same as above
(function () {
  //================
  function add(...nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
      sum += nums[i];
    }
    return sum;
  }

  console.log(add(2, 3));
  //=================
})();

//~ example: using array instead of rest operator
(function () {
  //================
  function add(...nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
      sum += nums[i];
    }
    return sum;
  }

  console.log(add([2, 3]));
  //=================
})();

//*==================================================

//! object

//* Object is a container of a related data
