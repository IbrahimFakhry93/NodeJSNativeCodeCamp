//! 62 – Errors

//& two types of error:
//? compile time error:
//* syntax error
// let str = "hi";  //! SyntaxError: Identifier 'str' has already been declared
// let str = "hi";  //! SyntaxError: Identifier 'str' has already been declared

/*

let str = "hi";
    ^
    //* stack trace contains files of module loader

SyntaxError: Identifier 'str' has already been declared
    at internalCompileFunction (node:internal/vm:73:18)
    at wrapSafe (node:internal/modules/cjs/loader:1178:20)
    at Module._compile (node:internal/modules/cjs/loader:1220:27)
    at Module._extensions..js (node:internal/modules/cjs/loader:1310:10)
    at Module.load (node:internal/modules/cjs/loader:1119:32)
    at Module._load (node:internal/modules/cjs/loader:960:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:86:12)
    at node:internal/main/run_main_module:23:47
    
*/

//*===================

//? runtime error:
const fs = require("fs");
fs.readFile("./data/current_customer.txt11", "utf-8", function (err, data) {
  if (err) {
    console.error(err);
  }
  console.log("read_customer_id", data);
});

/*
![Error: ENOENT: no such file or directory, open 'C:\1Programming\1 Node JS Cloud Native\28 Errors\data\current_customer.txt11'] {
  errno: -4058,
  code: 'ENOENT',
  syscall: 'open',
  path: 'C:\\1Programming\\1 Node JS Cloud Native\\28 Errors\\data\\current_customer.txt11'
}

*/

//^==============

console.log("hi"); //* this line of code just to clarify that I am in runtime, (runtime error)
function loop(x) {
  if (x >= 1000000000000) return;
  loop(x + 1);
}
loop(0);

//! uncaught Ranger Error: Maximum call stack size exceeded

//* Heads-up: This is a recursive loop that counts up to one trillion.
//* In practice, JavaScript will hit a stack overflow way before reaching that number,
//* because each recursive call adds a new frame to the call stack.
//* So this is a great example of a runtime error due to uncontrolled recursion.

//^============

console.log("hi2");
let str = st;
//! reference error: st is not defined

//*==========
//* throw error manually
throw new Error("Not in the model");
console.log("bye"); //* throw error stop the execution of the code afterwards, note it's dimmed

//* to avoid crashing the code (stopping execution as above) after we throw the error
//* we need to catch the throwing error by: try and catch statement

console.log("hi");
try {
  throw new Error("Not in the mode!");
} catch (err) {
  console.error(err.message);
}
console.log("bye");

//^ note:

//* in practice, we don't just log the error as above, instead we apply logic on that error to handle it when it occurs
//* usually when we receive data from outside n like network or server
