(function () {
  const fs = require("fs");

  process.nextTick(function () {
    console.warn("nextTick before Timer");
  });

  setTimeout(function () {
    fs.readFile("./data.txt", { encoding: "utf-8" }, function (err, data) {
      console.log(data);
    });
    process.nextTick(function () {
      console.warn("nextTick after inside Timer");
    });
  }, 100);

  process.nextTick(function () {
    console.warn("nextTick after outside Timer");
  });

  // nextTick before Timer
  // nextTick after outside Timer
  // nextTick after inside Timer
  // I/O

  //^ in console

  // nextTick before Timer
  // nextTick after outside Timer
  // nextTick after inside Timer
  // Asynchronous nature of node js
})();

//*====================================================

// nextTick
process.nextTick(function () {
  console.warn("nextTick before Timer");
});

// Timer
setTimeout(function () {
  // Check
  setImmediate(function () {
    console.warn("setImmediate: after timer");
  });
  // I/O
  fs.readFile("./data.txt", { encoding: "utf-8" }, function (err, data) {
    console.log(data);
  });
  // nextTick
  process.nextTick(function () {
    console.warn("nextTick after inside Timer");
  });
}, 100);

// nextTick
process.nextTick(function () {
  console.warn("nextTick after outside Timer");
});

/*

nextTick before Timer
nextTick after outside Timer
nextTick after inside Timer
setImmediate: after timer

Asynchronous nature of node js


? according to node js documentation
//* setImmediate queue is executed after I/O queue
//* but because I/O is very slow process so its queue will be empty 
//* ( because only after reading file finishes, event loop moves the I/O cb from the temp queue to the I/O queue)
//* so when event loop goes around the queues, it will find the I/O queue is empty
//* so it will execute the setimmediate queue first



*/
