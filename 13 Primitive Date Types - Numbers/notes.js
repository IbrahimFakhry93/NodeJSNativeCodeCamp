//* Data is stored in computer generally as binary data ( zero or one)

//* Datatypes are rules of operations depend on the type of the data
//* like i can add two numbers but i can't add two texts

//* data types classified into two parties:
//* primitives
//* objects

//! Primitives:
//* 7 types

//* undefined
//* null
//* string
//* number
//* bigint
//* boolean
//* symbol

//*=====================================================
//! 27 – Primitive Data Types – undefined, null

//* undefined and null are primitive values
//* undefined and null are similar with small differences
//* undefined and null are existed to express about non existent value

//? null
//* تعبر عن عدم وجود قيمة بشكل متعمد

//? undefined
//* قيمة افتراضية لو لسه محددناش نوع الداتا للمتغير

console.log(null == undefined); //! true
//* ==: compares values not data types, it makes type casting

console.log(null === undefined); //! false
//* strict equal, no type casting

//* undefined express case of the variable
//* null express the value of the variable

//* js is dynamic language or weak typed language

//~ to check the variable is empty or not:

if (x !== undefined && x !== null) {
  //* do something
}
//*=========================================================

//! 28 Data Types – numbers – IEEE 754

//* Numbers in JavaScript follow the IEEE 754 standard.
//* JavaScript uses double precision (64-bit) binary representation for numbers.

//* In computers, precision is measured in bits.
//* Single precision is 32 bits.
//* Double precision is 64 bits.

//* As we increase the decimal part, the precision of a number improves.
//* Maximum precision often required in financial applications is up to 5 decimal places.
//* More than 7 decimal places is usually considered excessive for practical use.

//* In C#:
//* - The 'float' data type uses single precision (32 bits).
//* - The 'double' data type uses double precision (64 bits).
//* - The 'decimal' data type uses 128 bits for higher precision and is ideal for financial calculations.

//* According to the IEEE 754 standard, decimal numbers are converted to binary by dividing them into 3 parts:
//* - Sign: Indicates positive or negative.
//* - Exponent: Represents the scale of the number.
//* - Mantissa: Represents the actual digits of the number.

//*=========================================================

//! 29 – Numbers – Coercion – basics

//* operations in computer are run or executed on binary version not decimal version

//* processor execute any instructions in the code

//* programming language convert by the compiler the code into cpu insturctions (machine code)

// Object type coercion example in JavaScript

//~ Example 1: Applying a method directly to a primitive number
let x = 5.1234;
console.log(x.toFixed(2)); // Output: 5.12
//* Explanation: The `toFixed` method is used on the number `x` to format it to 2 decimal places.
//* JavaScript automatically converts the primitive number into a temporary Number object
//* to allow access to the `toFixed` method, demonstrating object type coercion.

//~ Example 2: Using type coercion on a string containing a number
let y = "5.1234";
console.log(Number.parseFloat(y).toFixed(2)); // Output: 5.12
//* Explanation: The string `y` is coerced into a number using `Number.parseFloat()`.
//* Once converted, the `toFixed` method can be applied to format the number to 2 decimal places.

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

  //~ to get multipler of 3 for example
  for (let i = 1; i < 11; i++) {
    if (i % 3 === 0) {
      console.log(`${i} , 3 mulitpliers`); // Output: Even number
    }
  }
})();

//*================================

//! 30 Number Object

//* Number is a built -in object and constructor

//* number literal like 37 in javascript code is a floating point value

//* Number('unicorn') NaN
//* Number ('undefined) NaN
//* Number(null) 0

//* Number('10') 10
//* Number('10 ') 10
//* Number(' 10 ') 10
//* Number('  10  1  ') NaN

// The JavaScript Number type is a double-precision 64-bit binary format IEEE 754 value, like double in Java or C#. This means it can represent fractional values, but there are some limits to the stored number's magnitude and precision. Very briefly, an IEEE 754 double-precision number uses 64 bits to represent 3 parts:

// 1 bit for the sign (positive or negative)
// 11 bits for the exponent (-1022 to 1023)
// 52 bits for the mantissa (representing a number between 0 and 1)

//* static properties
//* allow us to use them directly without make instances of the object

console.log(Number.NaN == Number.NaN); //* false
console.log(Number.NaN === Number.NaN); //* false
//* NaN in binary has different values

//*=========

console.log(Number.isNaN(undefined)); //* false
console.log("----------");
console.log(isNaN(undefined)); //* true
//~ because isNaN in global is different than NaN in Number

console.log(Number.isFinite("0")); //* false
console.log("----------");
console.log(isFinite("0")); //* true

//*========================

//! instance properties

(function () {
  console.log(Number.toExponential()); //! error toExponential is not a number

  let x1 = new Number(12121121); //* x1 is Number object
  console.log(x.toExponential());

  //? or JS can apply type coercsion
  let x2 = 12121121; //* x2 is primitive
  console.log(x.toExponential()); //* 1.21212112e+6

  //* toExponential convert a number into scientific notation
})();

//*==============================================================================

//! 31 – Numbers – Math object

//*==============================================================================

//! 32 – Create and use your first module.

//^ open: index.js - test.js

//*==============================================================================

//! 37 – Strings – important functions – part 01

// let txt2 = "Hello, Hello, Ahmed";

// exports.allIndexes = function (str, pattern) {
//   let index = 0;
//   let arr = [];

//   for (let i = 0; i < str.length; i++) {
//     index = str.indexOf(pattern, i);
//     arr.push(index);
//     i = index;
//   }

//   return arr;
// };
//*==============================================================================
//! 38 – Strings – important functions – part 02

let txt = "Hello, Hello, Ahmed";

console.log(txt.replace(/\s/g, ","));
//*==============================================================================
//! 41 – NPM – install and publish packages

//* npm is made to ease modules exchanging private or oublic

//* for example ourMath module we copy it and oaste to use in another folder
//* so it can be oconsidered as pacjage to be used by anyone

//* npm is consisited of:

//* - register: databse for all packages
//* - npm website to expolore the public packages

//* packages can uploaded privately and apart of ateam can access this package.

//* you need account for npm publish

//* cli is download automatically with node js

//? steps to publish the package

//* npm login: so npm registery knows which account to publish on
//* npm publish
