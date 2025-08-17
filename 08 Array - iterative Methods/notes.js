//! 21 – Array 01 – Introduction

// (function () {
var colors = ["Black", "White", "Grey", 10, "Red", 8, "Green"];
colors[2] = "Gray";
console.log(colors[2]);
console.log(colors.length);
console.log(colors[colors.length - 1]);
console.log(colors[3] + colors[5]);
console.log(colors[3] + colors[4]);

colors.push("Yellow");
//colors[colors.length] = "Yellow";
console.log(colors);
colors.unshift("Blue");
console.log(colors);

colors.shift();
// })();

//*===========================================
//! 60 – Array’s Iterative Methods

//& filter:

//* filter the array based on conditions we set
//* loop over the array, extract every element that satisfies the condition
//* it makes shallow copy of the array

//* filter condition is a callback function
//* callback function receives three parameters one obligatory, and two others are options
//* this callback function must return a boolean value

//? filter callback function
function more_than_enough(item) {
  return item > 60;
}

let grades = [20, 30, 40, 50, 60, 80, 90];

let results = grades.filter(more_than_enough);

// console.log(results);

//? filter callback function as arrow function:

let results2 = grades.filter((item) => item > 60);
// console.log(results2);

//? example of filter shallow copy:

(function () {
  let arr = [{ firstName: "ahmed" }, { firstName: "yasser" }];

  let res = arr.filter((obj) => obj.firstName == "ahmed");

  // console.log(res);
  // console.log("--------------");

  //! proof of shallow copy:
  //* the mutation will sound in both arrays (arr and res)
  res[0].firstName = "ibrahim";
  // console.log(res); //  [ { firstName: 'ibrahim' } ]
  // console.log(arr); // [ { firstName: 'ibrahim' }, { firstName: 'yasser' } ]
})();

//^================================================
//? example of filter deep copy:

//* 1) use for loop
//* 2) use push and structuredClone

(function () {
  let arr = [{ firstName: "ahmed" }, { firstName: "yasser" }];

  let res = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].firstName === "ahmed") res.push(structuredClone(arr[0]));
  }

  // console.log(res);
  // console.log("--------------");

  //! proof of deep copy:
  //* the mutation will sound in both arrays (arr and res)
  res[0].firstName = "ibrahim";
  // console.log(res); //  [ { firstName: 'ibrahim' } ]
  // console.log(arr); // [ { firstName: 'ahmed' }, { firstName: 'yasser' } ]
})();

//? structuredClone() — Deep Copy in JavaScript

/*
✅ What It Does:
- Creates a true deep copy of any structured data.
- Avoids limitations of JSON.parse(JSON.stringify(...)).

✅ Key Features:
- Deep copies nested objects, arrays, Maps, Sets, etc.
- Supports circular references.
- Preserves types like Date, RegExp, TypedArrays.
- Available in modern browsers and Node.js v17+

⚠️ Notes:
- Not supported in older environments (e.g. Internet Explorer, Node.js < 17).
*- For legacy support, use lodash.cloneDeep() or write a custom deep copy function.

📌 Example:
const original = { name: "ahmed", meta: { age: 30 } };
const copy = structuredClone(original);
copy.meta.age = 99;

console.log(original.meta.age); // 30 ✅ original untouched
console.log(copy.meta.age);     // 99 ✅ deep copy mutated
*/

//*==============================================================================================================

//& find:

//* Find is similar to filter, but only return the first element achieves the condition, doesn't return array
(function () {
  function more_than_enough(item) {
    return item > 60;
  }

  let grades = [20, 30, 40, 50, 60, 80, 90];

  let results = grades.find(more_than_enough);
  //console.log(results); //* 80
})();

//& findLast:
//* return the last element achieves the condition, doesn't return array
(function () {
  function more_than_enough(item) {
    return item > 60;
  }

  let grades = [20, 30, 40, 50, 60, 80, 90];

  let results = grades.findLast(more_than_enough);
  // console.log(results); //* 90
})();

//& findIndex:
(function () {
  function more_than_enough(item) {
    return item > 60;
  }

  let grades = [20, 30, 40, 50, 60, 80, 90];

  let results = grades.findIndex(more_than_enough);
  //console.log(results); //* 5, index of element 80
})();

//& findLastIndex:

(function () {
  function more_than_enough(item) {
    return item > 60;
  }

  let grades = [20, 30, 40, 50, 60, 80, 90];

  let results = grades.findLastIndex(more_than_enough);
  //  console.log(results); //* 6, index of element 90
})();

//*==============================================================================================================
//& every: returns true or false

//* true: if all items fulfill the conditions
//* false: if NOT all items fulfill the conditions

(function () {
  function more_than_enough(item) {
    return item > 60;
  }

  let grades = [20, 30, 40, 50, 60, 80, 90];

  let results = grades.every(more_than_enough);
  //  console.log(results); //* false
})();

//? this will return true
(function () {
  function more_than_enough(item) {
    return item >= 10;
  }

  let grades = [20, 30, 40, 50, 60, 80, 90];

  let results = grades.every(more_than_enough);
  // console.log(results); //* true
})();

//& some: returns true or false

//* some returns true if at least one item fulfills the condition
(function () {
  function more_than_enough(item) {
    return item < 10;
  }

  let grades = [20, 30, 40, 50, 60, 80, 90];

  let results = grades.some(more_than_enough);
  // console.log(results); //* false
})();

//*==============================================================================================================

//& map
//* we use map then we want to execute a code on item on its own
//* نتسخدم ماب عندما نريد تنفيذ كود على كل عنصر على حدى

(function () {
  function more_than_enough(item) {
    return item * 2;
  }

  let grades = [20, 30, 40, 50, 60, 80, 90];

  let results = grades.map(more_than_enough);

  //console.log(results); // [40,  60,  80, 100, 120, 160, 180]
})();

//^=================

var colors = ["Black", "White", "Gray", "Red", "Green"];

function map_callback(item) {
  var new_item = "(" + item + ")";
  return new_item;
}

var ar2 = colors.map(map_callback);

//console.log(colors); // [ 'Black', 'White', 'Gray', 'Red', 'Green' ]

// console.log(ar2); // ["(Black)", "(White)", "(Gray)", "(Red)", "(Green)"];

colors[0] = "Blue";

//console.log(colors); // [ 'Blue', 'White', 'Gray', 'Red', 'Green' ]

//console.log(ar2); // ["(Black)", "(White)", "(Gray)", "(Red)", "(Green)"];

//& flatMap

var colors = [
  "Black Olive",
  "Antique White",
  "Ash Gray",
  "Chili Red",
  "Forest Green",
];

function flatArray(item) {
  return item.split(" ");
}

let res = colors.map(flatArray);
//console.log(res); //* [['Black', 'Olive'], ['Antique', 'White'], ['Ash', 'Gray'], ['Chili', 'Red'], ['Forest', 'Green']]

let resAfterFlat = colors.flatMap(flatArray);
console.log(resAfterFlat); //* ['Black', 'Olive', 'Antique', 'White', 'Ash', 'Gray', 'Chili', 'Red', 'Forest', 'Green']

//! Important Note:
//* Methods like filter, map, etc., return a **new array**.
//* But they do **not** deep copy the objects inside.
//* They perform a **shallow copy** of references.

// 🔍 What Does That Mean?
// When you use methods like .filter() or .map():

// They create a new array ✅

// But the objects inside are still references to the original ones ❌
