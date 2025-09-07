//! 74 – Closure

//* Mix between function and lexical environment where the function is declared in
//* This environment contains all the variables during the closure was created

//* closures were commonly used before ES6
//* closure was used instead of class to provide private members

//* In JavaScript, closures are a core language feature.
//* Every function "remembers" the lexical scope in which it was defined.
//* This includes functions defined inside ES modules.

//* When a function is defined in a module, it forms a closure over
//* that module's variables (its lexical environment).

//* If the function is imported into another module, it still carries
//* its original closure with it. This allows it to access variables
//* from its defining module, even when executed elsewhere.

//* This behavior is not unique to imports — all JS functions
//* retain their lexical environment by design.

function factory() {
  let product_name = "closure"; //* product isn't accessible outside this function (it's private) according to closure

  //* nested function
  function product() {
    console.log(product_name);
  }

  return product;
}
//* the lexical environment is the between the curly brackets of function factory (scope)
let prod = factory();

prod(); //* it is function which contain the variable in the lexical environment where it was declared (product)

//* prod is same as product function

//* closure is an object contains more than private variable and one method is public

//& common form of the closure as a self invoked function:

let prod2 = (function () {
  let product_name = "closure"; //* aren't accessible outside this function (private)

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

//& solution by using let instead

for (let i = 0; i < 4; i++) {
  process.nextTick(function () {
    console.log(i);
  });
}
