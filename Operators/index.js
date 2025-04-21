// let arr = [1, 2, 3];
// let another_array = [0, ...arr, 4, 5, 6];
// console.log(another_array);

//*=======================

// let arr = [1, 2, 3];
// console.log(arr);
// console.log(...arr);

// let arr_spread = [...arr];
// console.log(arr_spread);  //* arr_spread and arr are different arrays with different memory address

//*==========================

let person = {
  name: "ahmed",
  age: 16,
};

let per_arr = [...person]; //! error: person is not iterable
