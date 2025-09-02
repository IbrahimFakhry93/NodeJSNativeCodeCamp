//* Data is stored in computer generally as binary data ( zero or one)

//* Datatypes are rules of operations based on the type of the data
//* like i can add two numbers but i can't add two texts

//~ data types classified into two parties:
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

//! interview

//* undefined and null are primitive values
//* undefined and null are similar with small differences
//* undefined and null are existed to express about non existent value

//? null
//* تعبر عن عدم وجود قيمة بشكل متعمد
console.log(typeof null); // object

//? undefined
//* قيمة افتراضية لو لسه محددناش نوع الداتا للمتغير
console.log(typeof undefined); // undefined

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
