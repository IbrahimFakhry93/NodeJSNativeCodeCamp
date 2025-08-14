for (var i = 0; i < 4; i++) {
  process.nextTick(function () {
    console.log(i);
  });
}

//? in console:
//* 4
//* 4
//* 4
//* 4

//& solution with closure
for (var i = 0; i < 4; i++) {
  process.nextTick(
    (function (i) {
      return function () {
        console.log(i++);
      };
    })(i)
  );
}

//? in console:
// 0
// 1
// 2
// 3
