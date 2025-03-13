//* to run index.js
//* go to terminal: node index.js

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
