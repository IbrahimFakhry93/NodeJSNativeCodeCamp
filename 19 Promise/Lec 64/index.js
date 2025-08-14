const fs = require("fs");

//* build the executor fot the Promise class
function read_customer_id(resolve, reject) {
  fs.readFile("./current_customer.txt", "utf-8", function (err, data) {
    if (err) reject(err);
    else resolve(data);
  });
}

function success(data) {
  console.log("read file successfully");
  console.log(data);
  return "ok"; //* this return value will be handed to the next function in the promise consuming chain
}
function failure(err) {
  //   console.warn("read file failed");
  console.error(err.message);
}

// read_customer_id(success, failure);

//* pass resolve and reject through then method
// new Promise(read_customer_id).then(success, failure);

//* run the code it will have the same result of this line:  read_customer_id(success, failure);

//*===============================================

//! Promisify the read_customer_id function which contains asynchronous operation which is reading a file
let promise1 = new Promise(read_customer_id);
// console.log(promise1);

//! Consuming the promise to get the value of the asynchronous operation
// let promise2 = promise1.then(success, failure);

// console.log(promise2); //* the consoling itself is synchronous code
//* so it will executed first then promise will be consumed afterwards

//? In console:
/*


//* Promise {[[PromiseState]]: 'pending', [[PromiseResult]]: undefined, Symbol(async_id_symbol): 7, Symbol(trigger_async_id_symbol): 5}

read file successfully
010101010100o01eft


*/

//*==================================================

//! Promise cases:
//~ Pending cases is changed internally
//* Pending: the starter case of the promise
//* Fulfilled: success, it will call the resolve function
//* Failed: reject, it will call the reject function

//*=============================================

//! Promise chaining:
//* We can attach many functions to the promise to be executed when the promise consumed

function another() {
  console.log("another");
  return "ok another"; //* this return value will be handed to the next function in the promise consuming chain
}

function another2() {
  console.log("we throw error by ourself");
  throw new Error("thrown error"); //* "thrown err" will be read by console.error(err.message) by failure function
}

function last() {
  console.log("last");
}

// new Promise(read_customer_id)
//   .then(success, failure)
//   .then(another, failure)
//   .then(last, failure);

/*

 
            read file successfully
            010101010100o01eft
            another
            last

  */

//? also another simple form by using catch method to avoid send reject (failure) callback function with each then method

//* add another2 function to be consumed
new Promise(read_customer_id)
  .then(success)
  .then(another)
  .then(another2)
  .then(last)
  .catch(failure);

/*


read file successfully
010101010100o01eft
another
we throw error by ourself
!thrown error

*/

//* note the chain breaks after the error thrown in another2
//* so .then(last) wasn't executed

//*=====================================
//? Analogy of promise chaining by string methods chaining:
let str =
  " the ??? object represents the eventual completion or failure of an synchronous operation ";

str = str.trim().replace("???", "promise").toLowerCase();
// console.log(str);
