//! 58 – Passing by Reference – Passing by Value

//& V8 and Memory Handling in Node.js

//? JavaScript Value Representation in V8
//* V8 uses a tagging system to represent JavaScript values along with type information.
//* Small integers (SMIs) are encoded directly within the pointer, meaning they do not need separate heap storage.
//* For values like floating-point numbers or large integers that cannot be represented as SMIs, V8 allocates a HeapNumber object on the heap.

//? Example: let salary = 2150.5;
//* Since 2150.5 is a floating-point number and cannot be stored as an SMI, V8 creates a HeapNumber object on the heap.
//* The variable 'salary' holds a pointer (reference) that is typically stored in the local stack frame.
//* This pointer directs to the HeapNumber object in the heap.

//? Authentic Sources
//* V8 Value Representation Wiki: https://github.com/v8/v8/wiki/Value-Representation
//* V8 Developer Documentation: https://v8.dev/docs

//? Conclusion
//* The statement "the decimal value of a variable such as let salary = 2150.5; is stored in the heap and its address is on the stack" is essentially correct.
//* In V8, non-SMI numbers (like 2150.5) are stored as (HeapNumber objects) in the heap, while their reference (address) is maintained on the stack.

//^ watch the video and the slides

//& Primitive Copy
let salary = 2150.5;

let new_salary = salary;

new_salary = 400.1;

//* salary and new_salary will have different memory address in heap
//* so they are independent of each other

//& Reference Copy:

let arr = [1, 2, 3];
let new_arr = arr;

new_arr[1] = 500;
arr[0] = 400;
console.log(arr);
console.log(new_arr);

//* new_arr and arr will have same memory address

//& shallow copy array using spread operator:

(function () {
  let arr = [1, 2, 3];
  let new_arr = [...arr];

  new_arr[1] = 500;
  arr[0] = 400;
  console.log(arr); //* [400,2,3]
  console.log(new_arr); //* [1,500,3]
})();
//* new_arr and arr will have different memory address
//* so they are independent of each other

//& Passing array by reference:
(function () {
  let arr = [1, 2, 3];
  function doit(arr2) {
    arr2[0] = 400;
    console.log(arr2); //* [400,2,3]
  }

  doit(arr);
  console.log(arr); //* [400,2,3]
})();

//& Passing array by value using spread operator:
(function () {
  let arr = [1, 2, 3];

  function doit(arr2) {
    arr2[0] = 400;
    console.log(arr2);
  }

  doit([...arr]);
  console.log(arr);
})();

//& Reference copy for objects:
(function () {
  let person = {
    birth_year: 2000,
    name: "person name",
  };

  //^ look up the video and slider
  //~ in heap:

  //~? inside object in heap
  {
    //* 0x10 is object person memory address in heap
    //* name: 0x12  string address in heap
  }
  //? string value in heap
  //* 0x12 : "person name"

  //~ in stack:
  //* person: 0x10

  //~ object copy (reference copy)
  let new_person = person;
  //* new_person and person will have same memory address
  //* so there will be no two objects, only one object with two different addresses
  new_person.name = "new name";

  //^ note for string property mutation:
  //* string is immutable, its value in his address in heap can't be changed
  //* when string is mutated, a new address in heap will be allocated with the new value

  //? heap after mutation

  //~ in heap:
  //* 0x10 is object person memory address in heap
  //* name: 0x13  string address in heap

  //! 0x12 : "person name"   string, will bbe removed by v8 garbage collector
  //* 0x13 : "new name"   string new address in heap after mutation

  //~ for number property:
  //* number is mutable
})();
//*===================================================

//& Passing object by reference:

(function () {
  let person = {
    birth_year: 2000,
    name: "person name",
  };

  function doit(newPerson) {
    newPerson.birth_year = 1998;
    newPerson.name = "ahmed";
    console.log("newPerson: ", newPerson);
  }

  doit(person);
  console.log("person: ", person);
})();
//*===================================================
//& Passing object by value:

(function () {
  let person = {
    birth_year: 2000,
    name: "person name",
  };

  function doit(newPerson) {
    (newPerson.birth_year = 1998),
      (newPerson.name = "ahmed"),
      console.log("newPerson: ", newPerson);
  }

  doit({ ...person });
  console.log("person: ", person);
})();

//*=========================================================================
//& string interning:
(function () {
  let first_string = "hi";
  let second_string = "hi";

  //* first_string and second_string will have same address in heap memory
  //* that's why string is immutable

  //* it's a decision by programming language creators to declare string variable which hold same value of other string variable
  //* the two strings variable will have same address in heap
})();

//& shallow copy by spread operator for objects

(function () {
  let person = {
    birth_year: 2000,
    name: "person name",
  };

  let new_person = { ...person };
  new_person.name = "new name";
})();

//!=====================================================================================================================================================================

//! 59 – Shallow Copy – Deep Copy

//& Shallow Copy
(function () {
  //~ level 1
  let person = {
    name: "Ibrahim",
    year: 1998,

    //* nested object
    //~ level 2
    class: {
      id: 1,
      subject: "math",
    },

    grades: [10, 20, 30],
  };

  let newPerson = { ...person }; //* spread operator provides shallow copy so only level 1 will be independent
  newPerson.name = "ahmed";
  newPerson.class.subject = "Biochemstry";
  newPerson.grades[0] = 200;
  newPerson.grades[1] = 300;
  newPerson.grades[3] = 450;
  console.log(person);
  console.log(newPerson);
})();

//^======================================
//& deep Copy
(function () {
  //~ level 1
  let person = {
    name: "Ibrahim",
    year: 1998,

    //* nested object
    //~ level 2
    class: {
      id: 1,
      subject: "math",
    },

    grades: [10, 20, 30],
  };

  let newPerson = structuredClone(person); //* deep copy: all levels will be independent
  newPerson.name = "ahmed";
  newPerson.class.subject = "Biochemstry";
  newPerson.grades[0] = 200;
  newPerson.grades[1] = 300;
  newPerson.grades[3] = 450;
  console.log(person);
  console.log(newPerson);
})();
