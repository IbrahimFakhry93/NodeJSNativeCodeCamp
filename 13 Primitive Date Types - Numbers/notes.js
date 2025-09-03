//! 28 Data Types – numbers – IEEE 754

//^ as in slide: 3.png
//* Every number in JS is a floating point ex. 1 is 1.0 in JS
//* 3.14 is floating point number
//* 3 is integer part
//* .14 is decimal part

//! interview
//? In JavaScript, every number is a floating-point number under the hood
//* Unless you're using the special BigInt type

//? 🔢 JavaScript Number System
//* All numbers (integers, decimals, etc.) use IEEE 754 double-precision floating-point format
//* Even 1, 42, or 1000000 are stored as 1.0, 42.0, etc.

console.log(typeof 5); // "number"
console.log(5 === 5.0); // true ✅
console.log(0.1 + 0.2); // 0.30000000000000004 ❌ floating-point precision issue

//? 🧠 Why Floating Point?
//* JavaScript uses one unified number type: Number
//* Avoids complexity of separate integer/float types like in C or Java

//? ⚠️ Precision Pitfalls
//* Binary floating-point can't precisely represent some decimal fractions

console.log(0.1 + 0.2 === 0.3); // false ❌
//~ in console:
//* console.log(0.1 + 0.2);   0.30000000000000004

//^ Reading Lecture( no need to study it in depth)

//* Numbers in JavaScript follow the IEEE 754 standard.
//* JavaScript uses double precision (64-bit) binary representation for numbers.

//~ In computers, precision is measured in bits.
//* Single precision is 32 bits. (up to 7 decimal digits)
//* Double precision is 64 bits. (up to 16 decimal digits)

//* As we increase the decimal part, the precision of a number improves.
//* Maximum precision often required in financial applications is up to 5 decimal places.
//* More than 7 decimal places is usually considered excessive for practical use.

//? In C#:
//* - The 'float' data type uses single precision (32 bits).
//* - The 'double' data type uses double precision (64 bits).
//* - The 'decimal' data type uses 128 bits for higher precision and is ideal for financial calculations.

//*~ According to the IEEE 754 standard, decimal numbers are converted to binary by dividing them into 3 parts:
//^ means it doesn't directly convert the decimal number to binary
//* - Sign: Indicates positive or negative.
//* - Exponent: Represents the scale of the number.
//* - Mantissa: Represents the actual digits of the number.

//^ ask chatgpt how to convert decimal number like 0.33 or 0.75 into binary
//^ look up 8.png in lec28 folder

//*=========================================================

//! 29 – Numbers – Object type Coercion – basics

//! interview
//* operations in computer are run or executed on binary version not decimal version

//! interview
//* processor execute any instructions in the code
//^ for example"
//* when sum two numbers, the summation operation is done by the cpu not the programming language

//* programming language convert by the compiler the code into cpu instructions (machine code)

//? Object type coercion example in JavaScript

//! interview
//~ Example 1: Applying a method directly to a primitive number by applying object type coercion
let x = 5.1234;
console.log(x.toFixed(2)); // Output: 5.12
//^ Explanation:
//* The `toFixed` method is used on the number `x` to format it to 2 decimal places.
//* JavaScript automatically converts the primitive number into a temporary Number object
//* to allow access to the `toFixed` method, demonstrating object type coercion.

//~ even with integer number
let x1 = 5;
console.log(x1.toFixed(2)); // Output: 5.00

//~ Example 2: Using type coercion on a string containing a number
let y = "5.1234";
console.log(Number.parseFloat(y).toFixed(2)); // Output: 5.12
//^ Explanation:
//* The string `y` is coerced into a number using `Number.parseFloat()`.
//* Once converted, the `toFixed` method can be applied to format the number to 2 decimal places.

//? also this works: without parseFloat
console.log(Number(y).toFixed(2)); // Output: 5.12

//! interview:
//~ Why it works:
//* Primitive data types in JavaScript (like numbers, strings, etc.) are automatically
//* coerced into temporary wrapper objects (like Number, String, Boolean) when a method is applied.
//* This allows methods and properties typically belonging to objects to be used on primitive types.

//~ example of practical usage of modulus operator

(function () {
  //* Example: Practical Usage of the Modulus Operator
  //* The modulus operator (%) returns the remainder after division.
  //* It's commonly used to determine if a number is even or odd.

  for (let i = 1; i < 11; i++) {
    if (i % 2 === 0) {
      console.log(`${i} is even`); // Output: Even number
    } else {
      console.log(`${i} is odd`); // Output: Odd number
    }
  }

  //~ to get multiplier of 3 for example
  for (let i = 1; i < 11; i++) {
    if (i % 3 === 0) {
      console.log(`${i} , 3 multipliers`);
    }
  }
})();

//! interview
//^ note on best practice:
//* when declare a variable , initialize it with initial value to save some operations
let num1 = 0;
//* is better than
// let num1;
//* because we save conversion operation from undefined to a the assigned value

//* that is useful for application will be run on cloud because every resource we consume. it will cost us a lot of money
//* so try to save unnecessary operations

//* on cloud, there will be many many users, so our code maybe will run a lot of times in only one second

//*============================================================================================================

//! 30 Number Object

//* Number is a built-in object and constructor

//* number literal like (37) in javascript code is a floating point value

//* Every number in JS is a floating point
//* 3.14 is floating point number
//* 3 is integer part
//* .14 is decimal part

//! interview
//? NaN is a special numeric value
console.log(typeof NaN); //  number
//* It represents an invalid number result (e.g., from failed parsing)
//! mentor
//* NaN !== NaN — it's the only value in JS that is not equal to itself

console.log(NaN === NaN); // false ❌
console.log(Number(undefined)); // NaN
console.log(typeof undefined); // undefined

//? Type coercion and parsing with Number()
//* Number('unicorn') returns NaN — Not a Number

console.log(Number("unicorn")); // NaN
console.log(typeof NaN); //  number
console.log(typeof null); // object

//* Number('unicorn') NaN
//* Number ('undefined') NaN
//* Number(null) 0

//* Number('10') 10
//* Number('10 ') 10
//* Number(' 10 ') 10
//* Number('  10  1  ') NaN

//* The JavaScript Number type is a double-precision 64-bit binary format IEEE 754 value,
//* like double in Java or C#.
//* This means it can represent fractional values, but there are some limits to the stored number's magnitude and precision.

//~ Very briefly, an IEEE 754 double-precision number uses 64 bits to represent 3 parts:
//* 1 bit for the sign (positive or negative)
//* 11 bits for the exponent (-1022 to 1023)
//* 52 bits for the mantissa (representing a number between 0 and 1)

//^======================================
//! interview
//~ static properties
//* allow us to use them directly without make instances of the object
//* NaN is a static property

console.log(Number.NaN == Number.NaN); //* false
console.log(Number.NaN === Number.NaN); //* false
//* NaN in binary has different values

//*=========
//! mentor: ask tem about the mess of this following
//^ note:
//* isNaN and isFinite are existed inside Number and global object
//* and they have different behavior

//* Number.isNaN doesn't do type coercion  (number object)
//* isNaN does type coercion                (global object)

console.log(Number.isNaN(undefined)); //* false

//~ global isNaN
console.log(isNaN(undefined)); //* true
//~ because isNaN in global is different than NaN in Number

//^ chatgpt clarification:

console.log(Number.isNaN(undefined)); //* false
//* Number.isNaN does not coerce the input
//* undefined is not of type "number" → returns false

//~ global isNaN
console.log(isNaN(undefined)); //* true
//* global isNaN DOES coerce the input
//* Number(undefined) → NaN → isNaN(NaN) → true

//^ note: no different behavior regarding null
console.log(Number.isNaN(null)); //* false
//~ global isNaN
console.log(isNaN(null)); //* false

//*=============

//? What is a finite number in JavaScript?
//* A finite number is any number that:
//* - Has a real, measurable value
//* - Is NOT Infinity, -Infinity, or NaN (Not-a-Number)

console.log(isFinite(42)); // true ✅
console.log(isFinite(-3.14)); // true ✅
console.log(isFinite("100")); // true ✅ → coerced to 100

console.log(isFinite(Infinity)); // false ❌
console.log(isFinite(-Infinity)); // false ❌
console.log(isFinite(1 / 0)); // false ❌
console.log(isFinite(NaN)); // false ❌
console.log(isFinite("abc")); // false ❌ → coerced to NaN

console.log(Number.isFinite("0")); //* false
//* Number.isFinite does NOT coerce the input
//* "0" is a string → not a number → returns false

console.log("----------");
console.log(isFinite("0")); //* true
//* isFinite DOES coerce the input to a number
//* "0" → Number("0") → 0 → finite → returns true

//^ best practice:
//* rely on methods in one of them, Number or global
//* note: methods inside Number are more than in global object

//? parseFloat() and parseInt() — simple examples
//* Both functions extract numeric value from the beginning of a string
//* Parsing stops at the first invalid character

let str1 = "42.2px";
console.log(parseInt(str1)); // 42 ✅

let str2 = "3.14em";
console.log(parseFloat(str2)); // 3.14 ✅

let str3 = "abc123";
console.log(parseInt(str3)); // NaN ❌ starts with non-numeric

let str4 = "100.99 dollars";
console.log(parseFloat(str4)); // 100.99 ✅

console.log(parseInt("10.5")); // 10 ✅ integer part only
console.log(parseFloat("10.5")); // 10.5 ✅ full float

//*========================

//! instance properties

//* Instance properties are data or methods that belong to a specific object
//* which (the object) is created from a constructor (like new Number() or new Date()).

//* ✅ They are accessed only through the object, not the constructor itself.
//* ❌ Only instances (not primitives or constructors) have these properties directly.

//* technically, all instance methods are instance properties,

//? example:
//* toExponential convert a number into scientific notation
//* toExponential is instance method, can't be accessed through the constructor (Number) directly

(function () {
  console.log(Number.toExponential()); //! error toExponential is not a function

  let x1 = new Number(12121121); //* x1 is Number object
  console.log(x1.toExponential());

  //? or JS can apply type coercion
  let x2 = 12121121; //* x2 is primitive
  console.log(x2.toExponential()); //* 1.21212112e+6
})();

//^===================
(function () {
  let x = 12112.1989;

  // Convert to exponential notation (e.g., scientific format)
  console.log(x.toExponential()); // "1.21121989e+4"

  // Format number with locale-specific separators
  console.log(x.toLocaleString()); // "12,112.199" (in en-US locale)

  // Round to 3 decimal places  (decimal part to be 3 numbers)
  console.log(x.toFixed(3)); // "12112.199"

  // Format with 6 significant digits (all the number digits equals 6)
  console.log(x.toPrecision(6)); // "12112.2"
  //! interview
  //^ note:
  //* toFixed and toPrecision return string
  // Convert to string
  console.log(x.toString()); // "12112.1989"

  //^ note:
  const code = "8211";
  //* convert 8211 as decimal number into hexadecimal
  Number(code).toString(16); //! toString is not static method

  // Get primitive value (same as x)
  console.log(x.valueOf()); // 12112.1989

  //! interview
  // Create a Number object (not primitive)
  // Create a Number object wrapper around the primitive 17
  let y = new Number(17);
  //* logs the boxed Number object
  console.log(y); // [Number: 17]

  // Get primitive value from Number object
  // Extract the primitive value from the Number object
  console.log(y.valueOf()); // 17

  let a = 17;
  let b = new Number(17);

  console.log(a == b); // true  → loose equality auto-unboxes
  console.log(a === b); // false → strict equality fails (object vs primitive)
})();

//^ look up: toFixed vs toPrecision.pdf

//*==============================================================================

//! 31 – Numbers – Math object

//*==============================================================================

//! 32 – Create and use your first module.

//^ open: index.js - test.js

//*==============================================================================
