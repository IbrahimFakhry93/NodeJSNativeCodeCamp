// const florFah = 75;
// const floridaCel = (florFah - 32) * (5 / 9);
// console.log(floridaCel);

// //* comment
// // Initialize the variable
// var x = 5;
// //* The current value of x (5) is assigned to the variable result first.
// var result = x++;

// //* After the assignment, the value of x is incremented by 1.
// //* At this point, result holds the value 5, and x becomes 6.

// // Output the values
// console.log("Value of result: " + result); // Output: 5
// console.log("Value of x: " + x); // Output: 6

// var x = 5;
// var y = 18;

// console.log(`${x}`);
// console.log(`${y}`);

// console.log("after swap");

// function swap(x, y) {
//   var temp;

//   temp = x;

//   x = y;

//   y = temp;

//   console.log(`${x}`);
//   console.log(`${y}`);
// }

// swap(x, y);

// let var1 = 5;
// let var2 = "5";
// if (var1 !== var2) console.log("The condition is true");
// else console.log("The condition is false");

// console.log(x);var

// var a = 3;

// function first() {
//   const b = 1;

//   if (true) {
//     console.log(c);
//     const c = 5;
//   }
// }

// first();

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
