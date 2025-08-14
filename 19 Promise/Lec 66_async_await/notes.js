let arr = [1, 2, 4];
console.log(arr);
arr = 3;
console.log(arr);

(function () {
  // When you execute:
  let arr = [1, 2, 4];
  // 1. A new array object [1, 2, 4] is created in the heap memory.
  // 2. The variable 'arr', which resides on the stack, stores a reference (a pointer) to this array object.
  console.log(arr); // Output: [1, 2, 4]

  // When you then execute:
  arr = 3;
  // 1. A new primitive value 3 is created.
  // 2. The variable 'arr' is reassigned to hold the primitive value 3.
  // 3. The original array [1, 2, 4] becomes unreferenced (if no other reference exists) and is eligible for garbage collection.
  console.log(arr); // Output: 3
})();
