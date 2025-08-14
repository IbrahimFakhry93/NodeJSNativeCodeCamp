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
