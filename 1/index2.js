//* c with var

"use strict";

function first() {
  const b = 1;

  console.log(c); //* undefined

  if (true) {
    var c = 5;
    console.log(b);
  }

  console.log(c); //* 5
}
first();

console.log("=========================================================");

//* c with let

function first2() {
  const b = 1;

  //   console.log(c); //! Uncaught ReferenceError ReferenceError: c is not defined

  if (true) {
    let c = 5;
    console.log(b);
  }

  // console.log(c); //! Uncaught ReferenceError ReferenceError: c is not defined
}

// first2();
