//! 48 – Asynchronous – Event Loop – Callback – nextTick

//* Async: Request something at a specific point in time,
//* then receive the response later at another point.
//* analogy: sending email

//* Sync: Request something at a specific point in time and expect the response immediately.
//* analogy: phone call

//! interview
//* Javascript is synchronous language by nature
//* Asynchronous is possible in NODE JS by Libuv
//* Node JS uses Libuv not us

//* RUST language also uses libuv

//! interview:
//* Libuv is a multi-platform support library focus on I/O Asynchronous

//* It takes care of polling for I/O and scheduling callbacks to be run based on different sources of events.

/*
Polling for I/O" is a technical way of saying that the program is constantly checking for input/output (I/O) activities to happen,
 like reading data from a file, getting a message over a network, or writing data to a device. 
 Think of it as the program keeping an eye on things and asking, 
"Is there any data ready for me to handle?" If there is, it processes it; 
if not, it continues checking without stopping.
*/

//* Rust programming and Web servers depend on Libuv

//* The event loop is the central part of libuv's functionality

//* Libuv creates event loop

//* most event loop needs to do its requests from the operating system
//* such as i/o operations

//* I/O simply stands for input-output,
//* which is basically stuff like accessing the file system
//* and handling network requests.

//* This is actually the whole reason why Node.js
//* is completely designed around callbacks,

//* all operating systems provides system calls, by these calls we can ask the os to execute certain tasks
//* the event loop must be able to request these tasks properly of the OS

//* callback is very important in node js

//? idea of callback function:
//* prepare complete function, and ask other part of the code to call it
//* and this call is executed at certain time, when something happens

//* other part of this code can be line of code in our script
//* or other module is installed, this module receive the callback function
//* and when this module finishes something, it will call this callback function

//^ open: index.js
//^ open: ourMath.js
//^ open: data.txt

//* readFile function is asynchronous call

//& nextTick:

//* nextTick is async function
//* nextTick is used to register callback function that will be called later
//* not like readFile for example when reading file finished, it calls the callback

//* nextTick is being called of global object (process)

//? NextTick and setImmediate:
//* process the nextTick() is a function that we can use when we really, really need
//* to execute a certain callback right after the current event loop phase.
//* It's a bit similar to setImmediate, with the difference that setImmediate only runs
//* after the I/O callback phase.
//* What is similar, though, is that both are for really advanced use cases,

//! important info:
//* asynchronous code or  callbacks will be executed only after all sync code has been executed

//? promise:
//* promise is a javascript feature existed in browsers and node js
//* promise is async statement

//* callback won't be executed until all the sync code such as for loop in the script executed first

//* promise is similar to nextTick that it also registers callback
//* promise is used to execute chain of events right after another

//* not all callbacks have the same priority of execution

//^ open: callback execution

//*=============================================================================

//! 49 – Asynchronous – Event Loop Queues – Callbacks Priorities

//? watch the slides, important

//* in this lecture we will continue our talk about asynchronous programming in node js
//* and priority of callback execution

//* node js stack (main stack): region where code is executed according to the order of the code in the script
//* event loop region received any async code

//* when the code order comes to readFile async code
//* fs.readfile goes to main stack and a file request sent to event loop
//* event loop store the callback function (address of cb func in the memory) in the temp queue
//* then event loop sent file request to the operating system to read the file
//* the operating system who reads the file not node js

//^ note:
//* programming language requests the operating system to read the file
//* fs.readFile func: doesn't read the file, it requests to read the file by OS

//* node js will wait the callback in the event loop before it closes the application

//* when the OS send the content of the file reading back to event loop
//* event loop pass the stored callback function to the queues (widely used type of data structure)
//* queues is like sorted array and we can get only to the item which is first one in the queue (LIFO)
//* then callback function is sent at certain time to the main stack to be executed

//* node stack or main stack will be emptied and by this the code is finally executed

//? Event loop queues:

//* Event loop has number of queues depends on the type of operation

//* Six queues:
//* four queues in event loop
//* v8 queues in node js v8 engine

//~ nextTick queue:
//* any callback registered in nextTick will be stored in nextTick queues
//* if we have more than one nexttick cbs, they will be stored by the order of entering the queue

//~ promise

// ~ Timer
// * The delay you pass to setTimeout/setInterval does NOT guarantee
//   when the callback will actually execute.
// * It specifies the minimum time after which the callback becomes
//   eligible to move from the "waiting" (temporary) queue into the
//   Timers phase queue of the event loop.
// * Actual execution happens when the event loop reaches the Timers phase,
//   which may be later if other tasks are still running.

//~ I/0
//* I/O is the core of event loop
//* I/O: fs, tcp, dns and more
//* I/O is category contains interacting with files and different connections

//~ Check
//* for setImmediate

//~ Close:
//* close events of async tasks (closing connection)
// socket.on('close', ...).

//? I don't understand this line according to the lecture
//* event loop goes around each queue makes it empty then goes to the next queue

//*=================================================================================

//! 50 – Asynchronous – Callbacks Priorities Explanation

//^ open: index2.js

//* two queues in v8 are promise and nextTick

//* they are called Macro Tasks.
//* Macro tasks are existed in the browser as well as in node js

//? according to node js documentation
//* setImmediate queue is executed after I/O queue
//* but because I/O is very slow process so its queue will be empty
//* ( because only after reading file finishes, event loop moves the I/O cb from the temp queue to the I/O queue)
//* so when event loop goes around the queues, it will find the I/O queue is empty
//* so it will execute the setimmediate queue first

//*=================================================================================

//! 52 – Asynchronous – Flow Control Patterns .. and more.

//& Patterns to execute asynchronous code:

//? In Series nested callbacks

let fs = require("fs");

fs.readFile("./01.txt", { encoding: "utf-8" }, function (err, data) {
  console.log("01.txt read.");
  let data_01 = "--" + data + "--";
  fs.writeFile("./new_01.txt", data_01, function (err) {
    console.log("new_01.txt created.");
    fs.readFile("./02.txt", { encoding: "utf-8" }, function (err, data) {
      console.log("02.txt read.");
      let data_02 = "--" + data + "--";
      fs.writeFile("./new_02.txt", data_02, function (err) {
        console.log("new_02.txt created.");
      });
    });
  });
});

//^ in console:

// 01.txt read.
// new_01.txt created.
// 02.txt read.
// new_02.txt created.

//? In Series recursion:

let array = ["one", "two", "three", "four", "five"];
let result = [];

function final() {
  result.forEach((e) => console.log(e));
}

function recursive(e) {
  //* Base Case
  if (e == undefined) {
    return final(); //~ 2) then print the results
  }
  //* Main Logic
  fs.readFile(`./${e}.txt`, { encoding: "utf-8" }, function (err, data) {
    if (!err) {
      result.push(data); //~ 1) collect the output of reading file process
      //* Call Itself
      recursive(array.shift()); //^ shift: returns first element of the array and remove it from the array
    } else {
      console.warn(err);
    }
  });
}

recursive(array.shift());

// The code demonstrates a recursive approach to reading files asynchronously in sequence.
// It starts with an array of filenames, reads each file, stores its contents in the result array,
// and continues until all files are processed. When finished,
// it calls the final() function to output the results.

//* We used recursive asynchronous approach above instead of loop,
//* because loop by nature is sync code, so it doesn't guarantee the readFile process to be executed in sequence or in order
//^==================================================================================
//? In parallel: Sync loop:
(function () {
  let array = ["one", "two", "three", "four", "five"];

  array.forEach((e) => {
    fs.readFile(`./${e}.txt`, { encoding: "utf-8" }, function (err, data) {
      if (!err) {
        console.log(data);
      } else {
        console.warn(err);
      }
    });
  });
})();
//^==================================================================================
//? Limited in parallel:

//* limit the async calls that happen at the same time
//* we use this technique to slow down the code a little bit

//* like sending many emails should be slowed down so th email server doesn't block us

//* async call here in the example is setTimeout

(function () {
  let array = ["one", "two", "three", "four", "five"];
  let max = 3;
  let started = 0;

  function recursive() {
    while (array.length > 0 && started < max) {
      started++;
      let item = array.shift();
      setTimeout(() => {
        console.log(item);
        started--;
        recursive();
      }, 1000);
    }
  }

  recursive();
})();

//* max =3; it's the limit so not more than three callbacks (three timers in our example) are open at the same time
//* started is a counter to store in the number of open callbacks at the same time
