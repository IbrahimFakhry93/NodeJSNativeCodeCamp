//! 78 – Regular Expression – Grouping

//* with grouping, we use exec to view the matches because it has property is called grouping

//* divide the pattern into sub patterns

(function () {})();
//*===============================================================

let str = "image.jpg photo.png name";

let reg = /\w+\.jpg/g;

// console.log(reg.test(str));
// console.log(reg.exec(str));
let match = "";
while ((match = reg.exec(str))) {
  console.log(match); //* (1) ['image.jpg', index: 0, input: 'image.jpg photo.png name', groups: undefined]
}

//& with grouping: add ()
reg = /(\S+)\.jpg/g;
while ((match = reg.exec(str))) {
  //  console.log(match); //* (2) ['image.jpg', 'image', index: 0, input: 'image.jpg photo.png name', groups: undefined]
}

//^ note:
//* image is extracted alone in the array,

//* usage of grouping to extract part of the match such as image as in example above
//* so no need of using substring
//*===============================================================

(function () {
  let str = "image.jpg photo.png name";

  let reg = /(\S+)\.[a-z]{3}/g;

  let match = "";
  while ((match = reg.exec(str))) {
    // console.log(match);
  }

  /*
   
//* (2) ['image.jpg', 'image', index: 0, input: 'image.jpg photo.png name', groups: undefined]
//* (2) ['photo.png', 'photo', index: 10, input: 'image.jpg photo.png name', groups: undefined]

*/
})();
//*===============================================================

//& adjust the example above to practice grouping

//* use grouping and disjunction (|) to extract certain matches with certain extensions
//* | === or

(function () {
  let str = "image.jpg photo.png name";

  let reg = /(\S+)\.(jpg|png)/g; //* jpg or png

  let match = "";
  while ((match = reg.exec(str))) {
    //   console.log(match);
  }

  /*
   
(3) ['image.jpg', 'image', 'jpg', index: 0, input: 'image.jpg photo.png name', groups: undefined]
(3) ['photo.png', 'photo', 'png', index: 10, input: 'image.jpg photo.png name', groups: undefined]

*/
})();

//*===============================================================
//& Question:
//^  what is the difference between:
//* let reg1 = /(\S)\.(jpg|png)/g;     (without +)
//* and let reg2 = /(\S+)\.(jpg|png)/g;

(function () {
  let str = "image.jpg photo.png name";

  let reg1 = /(\S)\.(jpg|png)/g;
  let reg2 = /(\S+)\.(jpg|png)/g;

  //^ Explanation:
  // reg1: Captures only a single non-whitespace character before .jpg or .png.
  // reg2: Captures one or more non-whitespace characters before .jpg or .png (entire filename).

  // Example matches:
  str.match(reg1); // ["e.jpg", "o.png"]
  str.match(reg2); // ["image.jpg", "photo.png"]

  //* reg1 is too restrictive and only grabs the last non-whitespace character before .jpg or .png.
  //* reg2 properly matches the entire filename before .jpg or .png, making it more useful for identifying file names.
})();
//*===============================================================

//& usage of ?:

//* its effect depends on its usage place in the pattern

//? first use
//* ?: makes the characters and grouping before it optional

(function () {
  let str = "image.jpg photo.png name";

  let reg = /(\S+)\.?(jpg|png)?/g; //* make the extension optional and the dot optional

  let match = "";
  while ((match = reg.exec(str))) {
    //  console.log(match);
  }

  /*
(3) ['image.jpg', 'image.jpg', undefined, index: 0, input: 'image.jpg photo.png name', groups: undefined]
(3) ['photo.png', 'photo.png', undefined, index: 10, input: 'image.jpg photo.png name', groups: undefined]
(3) ['name', 'name', undefined, index: 20, input: 'image.jpg photo.png name', groups: undefined]




  */
})();

//? second use:
//* use ? inside the group at first to give names for the group

(function () {
  let str = "image.jpg photo.png name";

  let reg = /(?<filename>\S+)\.(?<ext>jpg|png)/g; //*

  let match = "";
  while ((match = reg.exec(str))) {
    //   console.log(match, match.groups);
  }

  /*

(3) ['image.jpg', 'image', 'jpg', index: 0, input: 'image.jpg photo.png name', groups: {…}] {filename: 'image', ext: 'jpg'}
(3) ['photo.png', 'photo', 'png', index: 10, input: 'image.jpg photo.png name', groups: {…}] {filename: 'photo', ext: 'png'}



  */
})();

//? third use:
//* use (?:) inside the group at first to non capture the group afterwards

(function () {
  let str = "image.jpg photo.png name";

  let reg = /(?:\S+)\.(?<ext>jpg|png)/g; //* non capture (\S+) inside groups object

  let match = "";
  while ((match = reg.exec(str))) {
    //  console.log(match, match.groups);
  }

  /*

(2) ['image.jpg', 'jpg', index: 0, input: 'image.jpg photo.png name', groups: {…}] {ext: 'jpg'}
(2) ['photo.png', 'png', index: 10, input: 'image.jpg photo.png name', groups: {…}] {ext: 'png'}



  */
})();
