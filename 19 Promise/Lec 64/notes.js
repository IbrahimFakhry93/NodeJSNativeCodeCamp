//! 64 – Promise – Convert Callbacks to Promises

//* promises have its own queue

//* promise is an enhancement of callbacks
//* promises is a new different way of writing asynchronous code

//* Promise is actually object , new Promise() => Promise is class

//& Promise-Based and Callback-Based File Operations in Node.js

//? Promise Chaining Approach
//* This approach ensures sequential execution using .then() and proper error handling with .catch().
//* It avoids nested callbacks and improves code readability.

Promise(read_customer_id)
  .then(get_customer_data) //* Retrieves customer data after reading the ID
  .then(write_new_file) //* Writes the new file based on customer data
  .catch(failure); //* Handles any errors that occur in the process

//? Traditional Callback-Based Approach
//* This example demonstrates the use of nested callbacks for file reading/writing.
//* Multiple asynchronous operations are executed, but the structure leads to "callback hell".
//* It is generally recommended to refactor this using promises or async/await for better maintainability.

function do_everything() {
  fs.readFile("./file", function (err, data) {
    if (err) {
      console.error("Error reading file:", err);
      return;
    }

    fs.readFile("./another_file", function (err, data) {
      if (err) {
        console.error("Error reading another file:", err);
        return;
      }

      fs.writeFile("./new_file", data, function (err) {
        if (err) {
          console.error("Error writing file:", err);
          return;
        }

        console.log("File successfully written!");
      });
    });
  });
}

//? Key Takeaways:
//* - Promises enhance readability and reduce nested structures.
//* - Callback-based code can be harder to maintain as complexity increases.
//* - Using async/await with promises can further improve clarity in asynchronous operations.

//*======================================================================================================

new Promise(
  //* Constructor function and it's called executor
  function (resolve, reject) {
    if (err) reject(err);
    else resolve(data);
  }
);

//* resolve and reject are callbacks

function failure(err) {
  console.warn("failed:");
  console.warn(err.message);
}

function success(data) {
  console.log(data);
}

//^ open index for example:

//*================================================================================

//? Analogy of promise chaining by string methods chaining:

let str =
  "the ??? object represents the eventual completion or failure of an asynchronous operation";

str = str.trim().replace("???", "Promise").toLowerCase();
console.log(str);
//*================================================================================

//* when we take instance of Promise, constructor function receive the executor and checks if it's function or not

//* then returns promise instance before executing the executor function itself
//* promise is a promise of executing code hasn't been executed yet

//? Original Metwally notes:
//* when we take instance of Promise, constructor function receives the executor and checks if it's function or not
//* then returns promise instance before executing the executor function itself
//* promise is a promise of executing code hasn't been executed yet

//? Rephrased and Corrected Explanation:
//* When creating a new Promise, the constructor expects an executor function.
//* It immediately checks that the provided executor is a callable function,
//! throwing a TypeError if it isn’t.
//* During construction, the executor function is synchronously invoked
//* with two callbacks (resolve and reject) that are used to settle the promise.
//* The Promise instance is returned, representing the eventual outcome
//* (fulfilled or rejected) of the asynchronous operation initiated by the executor.
//* Reference: MDN documentation on Promises - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

// Example to illustrate:
const promise = new Promise((resolve, reject) => {
  // This executor function is executed immediately and synchronously.
  // Later, calling resolve(value) or reject(error) will settle the promise.
  resolve(42); // For example, resolving the promise with the value 42.
});

//^ open index.js to see the practical example and understand

//! Consume Promise by then:

//* then method returns default promise
