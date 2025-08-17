//! Hoisting:

//* Javascript does hoisting to any variable or func or obj or class declaration to the start of the scope
//* that this variable is declared in
//* scope here means the global scope or function scope for var
//*

//* undefined + undefined = NaN

//! encapsulation:
//* gather all info related to a certain thing and put in a certain container which is called object

//~ example
// console.log(data);
// let data;

//! ReferenceError: Cannot access 'data' before initialization

//*========================================================================================================================
//& Title: Hoisting in JavaScript – A Study Guide

//? Overview:
//* In JavaScript, variable declarations made with 'var' are hoisted to the top of their
//* enclosing scope (a function scope, or global scope if not within a function).
//* This means the declaration is processed before any code is executed, but the assignment
//* remains where it is, which can lead to unexpected behavior if not understood fully.

//& Title: Example of Hoisting with var

//~ Original Code:
var x = 5;
if (true) {
  console.log(x); // Expected output: 5
  //* At this point, 'x' has been hoisted to the global scope and was previously assigned as 5.
  var x = 6;
  //* Although the declaration is hoisted, the assignment to 6 happens here after the first console.log.
}
console.log(x); // Expected output: 6
//* After the if block, 'x' now holds the updated value 6 since there's only one 'x' in the global scope.

//~ After Hoisting:

//? How Hoisting Works in This Example:
//* When JavaScript processes the code, it effectively interprets it like this:

var x; // Declaration hoisted to the top of the scope
x = 5; // Initial assignment occurs
if (true) {
  console.log(x); // Logs 5 because x is already defined and holds 5
  x = 6; // Assignment updates the value of x to 6
}
console.log(x); // Logs 6 since x has been updated

//? Key Takeaways:
//* 1. **Declaration vs. Assignment:** Only variable declarations (e.g., "var x;") are hoisted.
//*    The assignments (like "x = 6") remain in place and execute in order.

//* 2. **Scope Level:** 'var' does not create block scope; even inside an 'if' block, the variable
//*    is hoisted to the surrounding function or global scope.

//* 3. **Contrast with let/const:** Variables declared with 'let' or 'const' are block-scoped and
//*    are not hoisted in the same manner as 'var', which can help avoid some of these issues.

//*======================

//? let and const hoisting and TDZ

/*

   Code                               │   TDZ Timeline
 ─────────────────────────────────── │ ──────────────────────────────
{                                       │// Scope entry → TDZ starts for b & c
  console.log(a);  // ✅ undefined      │ ↑ b & c uninitialized (TDZ active)
  console.log(b); // ❌ ReferenceError│ │  any read → ReferenceError
   console.log(c); // ❌ ReferenceError│ │
                                        │ │
  var a = 1;                            │ │//  (var has no TDZ)
  let b = 2;                            │ └─// TDZ ends for b here
  const c = 3;                          │    //TDZ ends for c here

  console.log(b);  // ✅ 2              │ b & c now initialized, safe to access
  console.log(c);  // ✅ 3              │
}                                       │ Scope ends
*/

// TDZ start → immediately when the block/function scope begins.

// TDZ end → the moment the JavaScript engine executes the let or const declaration line.

// Until TDZ ends, the binding exists but is not initialized, so any read access throws ReferenceError.

//? Hoisting of let and const
// Yes, they are hoisted during the Creation Phase —
// the JavaScript engine allocates memory for their bindings before any code runs.

// But unlike var, they are not initialized to undefined immediately.

// Instead, they remain uninitialized in the Temporal Dead Zone (TDZ) —
// the period between the start of the scope and the execution of their declaration line.

// Accessing them in the TDZ throws a ReferenceError.

//? 🔍 Lifecycle of let/const in Scope
// Code
// [ Creation Phase ]
// - Name bound in the scope's Environment Record
// - Value slot marked as <uninitialized>
// - TDZ begins

// [ Execution Phase ]
// - When execution reaches the declaration:
//     → Value is assigned
//     → TDZ ends
