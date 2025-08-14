//! function

//* declaration function can be called inside its block again recursion
///* expression function can't apply that

//* hoisting is applied on declaration function
//* hoisting can't be applied on expression function
//! if usage before declaration,

//~ example:

(function () {
  function add(a, b) {
    let sum = a + b;
    console.log(sum);
  }

  console.log(add(2, 5) + add(2, 1)); //* NaN => undefined + undefined = NaN
  console.log(add(2, 5) < add(2, 1)); //* false
})();

//? undefined because there is no return value added to the function add above

//~ example: dynamic add function to add any numbers

(function () {
  //================
  function add(a, b) {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }
    return sum;
  }

  console.log(add(2, 3));
  console.log(add()); //* 5, JS is dynamic , it will work
  console.log(add());

  //=================
})();
//~ example: using rest operator to achieve same as above
(function () {
  //================
  function add(...nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
      sum += nums[i];
    }
    return sum;
  }

  console.log(add(2, 3));
  //=================
})();

//~ example: using array instead of rest operator
(function () {
  //================
  function add(...nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
      sum += nums[i];
    }
    return sum;
  }

  console.log(add([2, 3]));
  //=================
})();

//*==================================================
