//! 51 – Recursion Introduction

//* recursion

//* function calls itself number of times based on certain condition
//* recursion is like loop

//* recursive_function
//* base case (condition) : condition which stops the recursion to avoid infinity loop
//* logic
//* call function itself with parameter approaching the base condition to stop the recursive loop

function call_me_again(num) {
  //* base condition:
  if (num <= 0) return;

  //* logic:
  //   console.log(num);

  //* recursion:
  //   call_me_again(num - 1);
}

call_me_again(10);
// console.log("===================================================");
let num = 10;
while (num > 0) {
  //   console.log(num);
  num--;
  //? or:
  //   console.log(num--);
}

//* we directs to recursion only if necessary
//* recursion is not replacement of loops

//*==================================================================

//! Mentor:

//* My Solution:

(function () {
  let arr = [[1, 2, 3, 4], 5, 6, [7, 8, 9], 10, 11, [12, 13, 14, 15]];

  let data = "";

  function printArr(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        printArr(arr[i]);
      } else {
        //* Append comma only after the first element is already in data!
        data += `${data.length === 0 ? "" : ","} ${arr[i]}`;
      }
    }
  }

  printArr(arr);
  console.log(data);
})();

console.log("============================================");

//* Metwally Solution:

(function () {
  let arr = [[1, 2, 3, 4], 5, 6, [7, 8, 9], 10, 11, [12, 13, 14, 15]];

  let data = "";

  function process_array(ar) {
    if (Array.isArray(ar)) {
      ar.forEach((e) => process_array(e));
    } else {
      data = data + ", " + ar;
    }
  }

  process_array(arr);
  console.log(data);
})();

//* Recursion has a cost on the account of memory
("Recursion comes with a memory overhead because each recursive call stores its state on the call stack until it completes.");
("Recursion increases memory usage because each recursive call adds a new frame to the call stack until the process is resolved.");

//* Recursion has application on frontend for nested forms to get or set data or value from or on all the controls in this nested form
