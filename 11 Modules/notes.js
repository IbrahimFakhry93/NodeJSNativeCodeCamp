//! 26 – Modules – CommonJS (CJS)

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

let math = require("./ourMath.js"); //* ./: current directory that contains the current file
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
//*================================================================

//! 41 – NPM – install and publish packages

//& Title: Introduction to npm
//* npm is designed to simplify module exchange, whether private or public.
//* For example, a module like "ourMath" can be copied and used in another folder.
//* This module can be considered a package that can be utilized by anyone.

//& Title: Components of npm
//? npm consists of:
//* - Registry: A database of all packages.
//* - npm website: A platform to explore public packages.
//* Packages can be uploaded privately, and specific team members can be granted access.
//* To publish a package, you need an npm account.
//* The CLI (Command Line Interface) is automatically downloaded with Node.js.

//^ open: ourMath32.js by cmd terminal

//& Title: Steps to Publish a Package on npm
//? 1. npm Login
//* Logs into your npm account, so the registry knows which account to publish on.
//? 2. npm Publish
//* Publishes the package to the npm registry for others to use (or for private access if specified).

//*================================================================

//! 42 – Modules – ECMAScript Modules (ESM)

//^ create folder: esm
//^ create inside esm.js, index.js

//& Title: JavaScript and Node.js Modules - ECMAScript (ESM) vs CommonJS (CJS)

//& Sub-title: Differences Between ESM and CJS
//? - Syntax:
//*   ESM uses `import` and `export` keywords.
//*   CJS uses `require()` and `module.exports`.
//*
//? - Default Behavior:
//*   ESM is the standard for JavaScript in browsers and is increasingly supported in Node.js.
//*   CJS is the default module system in Node.js (up to Node.js 12; ESM support is added in later versions).
//*
//*? - Asynchronous Nature:
//*   ESM supports asynchronous loading of modules.
//*   CJS loads modules synchronously.

//& Sub-title: Similarities Between ESM and CJS
//* - Both systems allow modular programming by splitting code into reusable files.
//* - Both can coexist in the same Node.js project (with specific configurations).

//& Sub-title: Using Each Module System - Syntax, Export, and Import

(function () {
  //? Example of ECMAScript (ESM):
  //& File: math.mjs
  // export const add = (a, b) => a + b;
  // export const subtract = (a, b) => a - b;
  //& File: app.mjs
  // import { add, subtract } from './math.mjs';
  // console.log(add(5, 3));  // Outputs: 8
  // console.log(subtract(5, 3));  // Outputs: 2
})();

//? Example of CommonJS (CJS):
//& File: math.js
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
module.exports = { add, subtract };

//& File: app.js
const { add, subtract } = require("./math.js");
console.log(add(5, 3)); // Outputs: 8
console.log(subtract(5, 3)); // Outputs: 2

//& The Role of `.mjs` Extension
//* - The `.mjs` extension explicitly identifies files as using the ESM format.
//* - If the `"type": "module"` field is absent in `package.json`, Node.js requires `.mjs` for ESM files.

//& Adding `"type": "module"` to `package.json`
//* - You can use `"type": "module"` in the `package.json` file to default all `.js` files in the project to ESM.
//& Example:
// {
//   "name": "example-project",
//   "version": "1.0.0",
//   "type": "module", // Marks all `.js` files in the project as ESM by default
//   "main": "app.js"
// }

//& Coexisting CJS and ESM in a Project
//* - In a project with both CJS and ESM, use `.mjs` for ESM files and `.js` for CJS files.
//* - Alternatively, use `"type": "module"` for ESM and the `import()` syntax dynamically for CJS:
//& Example:
const cjsModule = await import("./math.js"); // Dynamically load a CJS module in an ESM file
