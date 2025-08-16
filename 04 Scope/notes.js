//& look up the slides very important to understand
//& and also look up the slides of hoisting and the notes file

//? also:

//& revise jonas scope and scope chain slides in js jonas course

//! Declaration using var in different scopes   (from lec 12 to 16)

//~ Example 1:

//* Global Scope
var data = 5; // Declare a variable 'data' with the value 5 in the global scope.
var data = 6; // Redeclare the same variable 'data' in the global scope (allowed with 'var', but not recommended).

//* Block Scope such as if statement block
{
  //* Accessing the variable before declaration in the block scope
  console.log(data); //* 6, we can access data because it's declared in global scope because var is function scope so var doesn't see this block scope as a scope
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

//? other explanation by chatgpt about var
var data = 6;
// Global scope: data is declared and initialized to 6.

// Entering a bare block (not a new var scope)
{
  // At runtime here, the var-declaration inside this block has already been
  // hoisted to the enclosing (global) scope and initialized to undefined.
  // However, because var has no Temporal Dead Zone, it’s safe to read.
  console.log(data);
  // Output: 6
  // Explanation: The global ‘data’ was set to 6, and the hoisted inner declaration
  // doesn’t overwrite that value until its assignment below.

  var data = 7;
  // This is a redundant declaration of the same global ‘data’.
  // The assignment updates data from 6 → 7.

  console.log(data);
  // Output: 7
  // Explanation: After the assignment, data is now 7 in the global scope.
}

//^===========================================

//! let declaration in different scopes

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

//* Only let and const variables are block-scoped. Variables declared with var end up in the closest function scope.
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
