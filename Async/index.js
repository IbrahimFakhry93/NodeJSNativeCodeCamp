const fs = require("fs");

function success() {
  console.log("ok");
}
function failure() {
  console.log("no");
}

function doSomething(done, err) {
  let data = fs.readFileSync("./data.txt", { encoding: "utf8" });

  if (data.length > 0) {
    done();
  } else {
    err();
  }
}

// doSomething(success, failure);

//*=========================================================================

//? this part works with ourMath.js

const ourMath = require("./ourMath");

function avg_callback(num) {
  console.log(`avg from callback is ${num}`);
}

// ourMath.calcAvg(avg_callback, 1, 2, 3);

//* created a callback function and pass it to module
//* and this module call this callback function
//*=========================================================================

//? callback inline, possible but less readable
//* better to define the callback function separately and then pass its name without ()

// fs.readFile("./data.txt", { encoding: "utf8" }, function (err, data) {
//   if (err) {
//     console.log(err);
//   } else console.log(data);
// });
// console.log("Reading file....");

//^ in console:

// Reading file....     //* executed first

// Asynchronous nature of node js  //* executed behind the scenes because readFile is async
//*=========================================================================

//& Ex:

// console.log("Read 1.txt");

// fs.readFile("./1.txt", { encoding: "utf8" }, function (err, data) {
//   if (err) {
//     console.log(err);
//   } else console.warn("first document");
// });

// console.log("Read 2.txt");

// fs.readFile("./2.txt", { encoding: "utf8" }, function (err, data) {
//   if (err) {
//     console.log(err);
//   } else console.warn(data);
// });
// console.log("Read 3.txt");

// fs.readFile("./3.txt", { encoding: "utf8" }, function (err, data) {
//   if (err) {
//     console.log(err);
//   } else console.warn(data);
// });

// console.log("done");

//^ in console:
// Read 1.txt
// Read 2.txt
// Read 3.txt
// done
// third document
// second document
// first document

//* first document printed at last, because the document is very big

//*=========================================================================

//& Ex: to make this i/o operations above to run in sequence
//* using concept of callback, but the operation will be slower than above

function readFirst() {
  console.log("Read 1.txt");
  fs.readFile("./1.txt", { encoding: "utf8" }, function (err, data) {
    if (err) {
      console.log(err);
    } else {
      console.warn("first document");
      readSecond();
    }
  });
}

function readSecond() {
  console.log("Read 2.txt");

  fs.readFile("./2.txt", { encoding: "utf8" }, function (err, data) {
    if (err) {
      console.log(err);
    } else {
      console.warn("first document");
      readThird();
    }
  });
}

function readThird() {
  console.log("Read 3.txt");

  fs.readFile("./3.txt", { encoding: "utf8" }, function (err, data) {
    if (err) {
      console.log(err);
    } else console.warn(data);
  });
}

// readFirst();

//^ in console:
// Read 1.txt
// first document
// Read 2.txt
// first document
// Read 3.txt
// third document

//*=========================================================================

//& nextTick:

//* nextTick is async function
//* nextTick is used to register callback function that will be called later
//* not like readFile for example when reading file finished, it calls the callback

//? NextTick and setImmediate:
//* process the nextTick() is a function that we can use when we really, really need
//* to execute a certain callback right after the current event loop phase.
//* It's a bit similar to setImmediate, with the difference that setImmediate only runs
//* after the I/O callback phase.
//* What is similar, though, is that both are for really advanced use cases,

// console.log("1");
// process.nextTick(function () {
//   console.warn("nextTick");
// });
// console.log("2");

//^ in console:
// 1
// 2
// nextTick

//* callback function won't be called or executed randomly
//*=========================================================================

Promise.resolve().then(function () {
  console.warn("promise");
});

process.nextTick(function () {
  console.warn("nextTick 1");
});

for (let i = 0; i < 10; i++) {
  console.log(i);
}

process.nextTick(function () {
  console.warn("nextTick 2");
});

//^ in console:

//* for loop will be executed first

/*

0
1
2
3
4
5
6
7
8
9
nextTick 1
nextTick 2
Promise


*/

//* callback won't be executed until all the sync code such as for loop in the script executed first

//* promise is similar to nextTick that it registers callback
//* promise is used to execute chain of events right after another

//* not all callbacks have the same priority of execution
