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
