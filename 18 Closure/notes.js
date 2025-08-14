//! 74 – Closure

//* Mix between function and lexical enviornment where the fuction is declared in
//* This enviornment contains all the variables during the closure was created

function factory() {
  let product_name = "closure"; //* aren't accessable outside this function (private)

  //* nested function
  function product() {
    console.log(product_name);
  }

  return product;
}
//* the lexical enviornment is the between the curly brackets of function factory (scope)
let prod = factory();

prod(); //* it is function which contain the variable in the lexical enviroment where it was declared (product)

//* prod is same as product function

//* closure is an object contains more than private variable and one method is public

//& common form of the closure as a self invoked function:

let prod2 = (function () {
  let product_name = "closure"; //* aren't accessable outside this function (private)

  //* nested function
  function product() {
    console.log(product_name);
  }

  return product;
})();

prod2();

//& other form and expect parameter

let prod3 = (function (product_name) {
  //* nested function
  function product() {
    console.log(product_name);
  }

  return product;
})("closure");

prod3();

//* closures were commonly used before ES6

//& example of closure maintain the latest variables

const count = (function () {
  let counter = 0;
  return function () {
    console.log(++counter);
  };
})();

count();
count();
count();

///? in console:
//* 1
//* 2
//* 3

//& closure before ES6

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

//& solution with let

for (let i = 0; i < 4; i++) {
  process.nextTick(function () {
    console.log(i);
  });
}
