//* function to calc avg
//* inputs: ...nums
//* loop over nums array
//* avg = calc sum then divide sum by nums.length
//* return avg

exports.calcAvg = function (...nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }

  const avg = sum / nums.length;
  return avg;
};

//*===========================================

//! Calc: Sets Union:

//* Set === array in mathematics
//* a set is a collection of unique elements
//* no duplication of elements
/*

- write two arrays = arr1 , arr2 
- function for union set
- inputs: arr1, arr2
- decl new union array = arr3
- loop on one of the two arrays and push it on the new array
- loop on the second array
- compare each second array element with the first
- if (!arr3.includes(arr2[i]))  arr3.push(arr2[i])
- return arr3

*/

exports.unionSets = function (arr1, arr2) {
  let arr3 = [];

  for (let i = 0; i < arr1.length; i++) {
    arr3.push(arr1[i]);
  }
  for (let i = 0; i < arr2.length; i++) {
    if (!arr3.includes(arr2[i])) arr3.push(arr2[i]);
  }

  return arr3;
};

//? or:  for the second loop

// for (let i = 0; i < arr2.length; i++) {
//   if (arr3.includes(arr2[i])) {
//     continue;
//   }
//   arr3.push(arr2[i]);
// }

//*===========================================

//! sets Intersection

exports.InterSets = function (arr1, arr2) {
  let arr3 = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) arr3.push(arr1[i]);
  }

  return arr3;
};

//*===========================================

//! max number of group of numbers

/*

- function for max
 - inputs: ...nums
 - declare var for max
 - loop over nums
 - if nums[i] > max   max=nums[i]
 
 return max
*/

exports.maxNum = function (...nums) {
  let max = Number.MIN_SAFE_INTEGER; //* the bench mark
  //? or:
  //*  let max = Number.NEGATIVE_INFINITY

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) max = nums[i];
  }

  return max;
};
//*===========================================

//! min number of group of numbers
exports.minNum = function (...nums) {
  let min = Number.MAX_SAFE_INTEGER; //* the bench mark
  //?or:
  //*  let max = Number.NEGATIVE_INFINITY

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < min) min = nums[i];
  }

  return min;
};

//*===========================================

//! Sets difference

exports.diffSets = function (arr1, arr2) {
  let arr3 = [];

  for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i])) arr3.push(arr1[i]);
  }

  return arr3;
};

//*===========================================
let txt2 = "Hello, Hello, Ahmed";

exports.allIndexes = function (str, pattern) {
  let index = 0;
  let arr = [];

  for (let i = 0; i < str.length; i++) {
    index = str.indexOf(pattern, i);
    if (index === -1) break;
    arr.push(index);
    i = index;
  }

  return arr;
};
