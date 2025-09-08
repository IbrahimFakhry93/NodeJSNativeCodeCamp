//!  66 – Promise – async / await

//& Do this first in the terminal:

//* cd 'C:\1Programming\1 Node JS Cloud Native\NodeJSNativeCodeCamp\Promise\Lec 66_async_await'

const fs = require("fs");

function failure(err) {
  console.warn("read file failed");
  console.error(err.message);
}

async function process_customer() {
  console.log("start customer process");
  const customerId = await fs.promises.readFile(
    "./current_customer_id.txt",
    "utf-8"
  );
  console.log(customerId);

  let data = await fs.promises.readFile("./costumersData.txt", "utf-8");
  data = JSON.parse(data);

  let { customers: customerData } = data;
  customerData = customerData.filter((customer) => customer.id === +customerId);

  if (customerData.length > 0) {
    let flatObject = "";
    for (const p in customerData[0]) {
      flatObject += `${p}: ${customerData[0][p]} \n`;
    }
    await fs.promises.writeFile(
      `./newCustomer_${customerData[0].id}.txt`,
      flatObject,
      "utf-8"
    );
  } else failure(new Error("customer data not found"));
}

process_customer();

console.log("last one");

//* await inside process_customer, await keyword will pause the function itself not the stack
//* it will hand it to the event loop to be executed later once the stack is empty

//? in console:
/*
 
start customer process          //* sync code
last one                        //* sync code
 106                            //* result of async code

*/

//! rule of thumb:
//* sync code executed first
//* then async code will be executed

//! Rule of thumb:
//* Synchronous code is executed immediately by the JavaScript engine (e.g., V8 in Node.js or Chrome).
//* Asynchronous code (such as callbacks, timers, or promises) is not executed immediately.
//* Instead, these async tasks are handed off to the host environment's event loop—with Node.js using libuv or browsers using their own event loop.
//* Once the call stack is empty, the event loop picks up the queued asynchronous operations and executes their callbacks.
//* So, while V8 executes the code, the scheduling and execution of asynchronous tasks are managed by the event loop.
