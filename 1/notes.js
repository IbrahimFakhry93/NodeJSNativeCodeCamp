//* to run index.js
//* go to terminal: node index.js

//! 03 Variables:

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

//! 04 Variables – hands-on

var data = 5; //* declaration
data = 10; //* assignment
console.log(data); //* usage

//*=============================================================================================================================

//! Variables cont in scope lesson 12

//* const variable: variable that can't be changed after initialization
//* const is read-only variable

//*=================================================================================================================

//! Declaration using var in different scopes   (from lec 12 to 16)

//& look up the slides very important to understand
//& and also look up the slides of hoisting and the notes file

//? also:

//& revise jonas scope and scope chain slides in js jonas course

//~ Example 1:

//* Global Scope
var data = 5; // Declare a variable 'data' with the value 5 in the global scope.
var data = 6; // Redeclare the same variable 'data' in the global scope (allowed with 'var', but not recommended).

//* Block Scope such as if statement block
{
  //* Accessing the variable before declaration in the block scope
  console.log(data); //* 6, we can access data because it's declared in global scope
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

//^===========================================

//~ same Example with let:

//* Global Scope
let data = 6; // Redeclare the same variable 'data' in the global scope (allowed with 'var', but not recommended).

//* Block Scope such as if statement block
{
  // console.log(data); //!: ReferenceError: Cannot access 'data' before initialization
  let data = 7; // Declare and assign a new value to 'data' in the block scope.
  console.log(data); // Output: 7 (the reassigned value within the block scope).
}

//* Function Scope
function displayData() {
  //* Accessing the variable before declaration in the function scope
  // console.log(data); //!: ReferenceError: Cannot access 'data' before initialization
  let data = 8; // Declare and assign a new value to 'data' in the function scope.
  console.log(data); // Output: 8 (the reassigned value within the function scope).
}

displayData(); // Call the function to demonstrate function-scoped variable behavior.
console.log(data); // Output: 6 (the value reassigned in the block scope).

/*

//* 7

//* 8

//* 6

*/
//^===========================================

//~ Example 2: var declaration in block scope

var x = 5;

{
  console.log(x);
  var x = 6;
}

console.log(x);

//^ output:
// 5
// 6

//^===========================
//~ Example 3: var declaration in function scope

var data = 5;

function test() {
  console.log(data);
  var data = 6;
}
function testAfterHoist() {
  var data;
  console.log(data); //* undefined
  var data = 6;
}

test(); //* undefined
testAfterHoist(); //* undefined

//^=======================================================
var a = 3;

//& c with var

function first() {
  const b = 1;

  console.log(c); //~ undefined

  if (true) {
    var c = 5;
    console.log(b);
  }

  console.log(c); //~ 5
}

//* Only let and const variables are block-scoped. Variables declared with var end up in the closest function scope;
//* var will be hoisted to the top scope of first function

//^=======================================================

//& c with let

first();
function first() {
  const b = 1;

  console.log(c); //! Uncaught ReferenceError ReferenceError: c is not defined

  if (true) {
    let c = 5;
    console.log(b);
  }

  console.log(c); //! Uncaught ReferenceError ReferenceError: c is not defined
}

first();

//^=======================================================

//& proof that let is a block scope

let data = 5;

if (true) {
  let data = 6;
}

console.log(data); //* 5, same value of global scope

//^=================================================
(function () {
  //& Forms to keep in mind for interview regarding hoisting and scopes:

  //^ look up slides for Lec 18 for metwally for hoisting, very important

  //~ var and hoisting
  function testVar() {
    console.log(data); //! undefined
    var data;
  }
  testVar();

  //^==================

  //~ let and hoisting
  function testLet() {
    console.log(data); //!  ReferenceError: Cannot access 'data' before initialization
    let data;
  }
  testLet();

  //^==================
  //~ let and hoisting
  function testLet2() {
    data = 5;
    console.log(data); //!  ReferenceError: Cannot access 'data' before initialization
    let data;
  }
  testLet2();
  //^==================
  //~ let and hoisting
  function testLet3() {
    let data;
    console.log(data); //! undefined
    data = 5;
  }
  testLet3();
  //^==================
  //~ const and hoisting
  function testConst() {
    console.log(data); //! syntax error missing initializer in const declaration
    // const data;
  }
  testConst();
  //~ const and hoisting
  function testConst2() {
    // const data;
    console.log(data); //! syntax error missing initializer in const declaration
    data = 5;
  }
  testCons2t();
})();

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

//*==================================================

//!
