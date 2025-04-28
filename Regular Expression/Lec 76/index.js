//! 76 – Regular Expression – More Character Classes

(function () {})();
//*===============================================================

(function () {
  let str = "Almondo #$% Petro 20";

  let reg = /\d/g;
  console.log(reg.test(str));

  let matches = str.match(reg).join("\n");

  if (matches != null) console.log(matches);

  //* \d: any digit   === [0-9]
  //* \D: anything except digit   === [^0-9]

  //* \w: any word, but not space and not special symbols (#$%) === [a-zA-Z0-9]
  //* \W: word  === [^a-zA-Z0-9]

  //* \s: search for space
  //* \S: exclude space (anything except space)
})();

//*===============================================================

(function () {
  //* to extract the backslash itself, you need to aad one more backslash in the string and the pattern
  //* because both string and pattern treats the \ as escape character

  let str = `Almondo. \\#$% 
  Petro 20`;

  let reg = /\\/g;
  console.log(reg.test(str));

  let matches = str.match(reg);

  if (matches != null) console.log(matches);

  //* \n

  //* \.: to search for dot itself

  //* . : . without backslash means all
})();

//*====================================================================

//! 77 – Regular Expression – Quantifiers

//* to define number of characters to be met

console.log(
  "================================================================================="
);
(function () {
  //* to extract the backslash itself, you need to aad one more backslash in the string and the pattern
  //* because both string and pattern treats the \ as escape character

  let str = `Almondo.. 1231232 \\#$% 
  Petro 20`;

  let reg = /\.{2}/g; //* exactly two dots not less not more
  console.log(reg.test(str)); //* true

  let matches = str.match(reg);

  if (matches != null) console.log(matches); //* ['..']

  //* if we add comma to the quantifier, so it means at least two characters

  let reg2 = /\.{2,}/g;
  let reg3 = /\w{2,}/g; // Two letters at least next to each other, but they do not have to be identical.
  let reg4 = /\d{3,4}/g; // at least three numbers, maximum four numbers

  //* \d+  === \d{1,}
})();

//*====================================================================
