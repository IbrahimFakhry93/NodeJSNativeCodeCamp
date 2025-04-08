//! Common Modules:

//* Modules is a method to organize the code in the application
//* Divide the code into files

//* Entire application is divided into components
//* Every component is divided into modules

//* Module is a code was developed separately then it was merged with other code when needed

//* Module can be one file or more than one file

//? For example
//* Orders component
//* order works with database
//* Module is working with database and then was merged with orders component

//* Module can contain one file or number of files.

//* Export process occurs in the module

//* Import process occurs in the file which module is used

//* There are two ways to create modules in Node JS
//* common JS (not supported in browser, not in frontend)

//* Any file with respect to Node JS is module

//* any code in a node js file, that code is inserted inside or wrapped by wrapping function

//~ wrapper function
// (function(exports,require,module, __filename,__dirname){
// your code
// })

//* (): this mean immediate call for a function

//* function(exports,require,module, __filename,__dirname) this in any function is called signature (function keyword + parameters)

//* so the code inside this function or in other words module will be function scoped not in global scope
//* so different loaded modules can have same variables without condradiction
//* so members in every moduels (variables + functions) will be private for every module

//*==================================

//~ __filename
//* the name of the current script we work on, ex. index.js

//~ __dirname
//* path of the directory on the operating system and this directory contain the current working file

//~ module === this
//* this keyword refers to Module Object in Node JS

//~ require:
//* is used to do import for any file we are working on

//~ exports:
//* It is an empty object in Module object

//*===========================

//~ proof that you are in a wrapper function in a module in Node JS
//^ open: index.js

//* In Node.js, every module is wrapped in a function by default to provide certain variables
// like __dirname, __filename, exports, module, require, and arguments.

(function () {
  console.log(__dirname); //* Outputs the directory name of the current module
  console.log(__filename); //* Outputs the file name of the current module
  console.log(exports); //* Outputs an object that can be used to export functions and variables from the module
  console.log(module); //* Outputs information about the current module
  console.log(require); //* Outputs the function used to import other modules

  console.log(arguments); //* Outputs the arguments object containing the values passed to the wrapper function

  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]); //* Logs each argument passed to the function
  }
})();

//*================================

//~ Example on using Module

//* create file (ourMath.js)
//* ourMath is our module

// function factorial(num) {
//   if (num <= 2) return num;

//   let fact = 1;

//   for (let i = 2; i <= num; i++) {
//     fact *= i;
//   }

//   return fact;
// }

exports.fact = factorial(10);

//? or: an other way for exporting
exports.factorial = function (num) {
  if (num <= 2) return num;

  let fact = 1;

  for (let i = 2; i <= num; i++) {
    fact *= i;
  }

  return fact;
};

//? importing factorial function in another file like index.js
//? using require

let math = require("./ourMath"); //* ./: current directory that contains the current file
console.log(math.fact(5));

//? or:
console.log(math.factorial(5)); //* if we use another export method

//^===================
function circleArea(radius) {
  return 3.14 * radius ** 2;
}

exports.circleArea = circleArea(5);

//*================================================================

//! Core Modules or built in modules in Node JS
//~ example;
//* module to check our operating system

let os = require("os");
console.log("OS:", os.platform(), os.arch());
console.log(os.tmpdir());
console.log(os.totalmem()); //* 16 gigabyte
console.log(os.freemem()); //* 6 giga
console.log(os.uptime() / 60 / 60); //* 6 giga
