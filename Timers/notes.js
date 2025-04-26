//! 70 – Timers

//& setImmediate:
//* it exists in node js itself

//* setImmediate is a timer which its value is zero

const fs = require("fs");

// function hi() {
//   console.log("hi");
// }

// fs.readFile("index.js", "utf-8", (err, data) => {
//   if (err) console.log(err);
//   else {
//     console.log("index");
//     setImmediate(hi);
//   }
// });

// console.log("sync code");

//* we need setImmediate to execute code in next event loop iteration directly
//* setImmediate returns object

//* we have clearImmediate to clear that timer

//* nextTick is called after every queue ends

///*=====================================

//& setTimeout:

// setTimeout(hi, 1000);
//* after one second (1000ms), the setTimeout timer will be put in the queue

// (function () {
//   function hi() {
//     console.log("hi");
//   }

//   let timer = setTimeout(hi, 1000);

//   if (Math.floor(Math.random() * 4) % 2) clearTimeout(timer);
//   console.log("sync code");
// })();

///*=====================================

//& setInterval:

(function () {
  let counter = 0;
  function hi() {
    counter++;

    console.log("Hi", counter);
    // if connection success clear interval
    if (counter === 5) clearInterval(timer);
  }

  let timer = setInterval(hi, 1000);
})();

//* we use interval in case to retry to connect with remote source such as database
//* we retry to connect umber of times if the connection failed at first
