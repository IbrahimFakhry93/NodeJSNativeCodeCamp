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
