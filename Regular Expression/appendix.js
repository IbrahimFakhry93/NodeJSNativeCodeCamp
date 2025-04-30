//? Why Does \ Need Escaping?
// Because \ itself is a special character.
// To use an actual backslash in a string or regex, you need \\.

//? Example:
console.log("This is a backslash: \\");

// This will correctly output:
// This is a backslash: \

//^=========================================

//& two forms to declare regular exp variable in js

//! 1) Object Regex
//~ let rego = new RegExp("pattern", "flags");
let tld = "com";

//* using RegExp allows to pass to it dynamic pattern (dynamic or generic inputs or variables)
let emailPatternObj = new RegExp("[\\w]+@[\\w]+\\." + tld, "g");

//^ get matches by match method
let emails1 = data.match(emailPatternObj); //* return array, if nothing matches, it returns null

//^ get matches by exec method
let matches = "";
while ((matches = emailPatternRegexLiteral.exec(data))) {
  console.log(matches[0]);
}
//* we use exec in case we need to do implementation or decision in every match

//! 2) regular expression literal

//~ let reg = /pattern/; // regular expression literal
let emailPatternRegexLiteral = /\w+@\w+\.[a-z]{2,}/g;

// let emails = data.match(emailPatternRegexLiteral); //* return array, if nothing matches, it returns null
// if (emails != null) console.log(emails.join("\n"));

//* eventually regular expression literal converts into object Regex
//* so we can use exec
let email3 = emailPatternRegexLiteral.exec(data);

//^=========================================================================

//* \d: any digit  === [0-9]
//* \D: anything except digit  === [^0-9]

//* \w: any word, but not space and not special symbols (#$%) === [a-zA-Z0-9]
//~ \w+ representing one or more word characters (letters, digits, and underscores).
let reg3 = /\w{2,}/g; // Two letters at least next to each other, and they do not have to be identical.

//* \W: word  === [^a-zA-Z0-9]

//?===============================================================
//* \s: search for space
//* \S: exclude space (anything except space)

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
//?===============================================

//* \n

//* \.: to search for dot itself
let reg = /\.{2}/g; //* exactly two dots not less not more

//* . : . without backslash means all except new line
let regDot = /p.+/i; //* /p.+/i  === /p.{1,}/i
// a.b           | Matches "a", any character, then "b" | "axb", "a_b", "a2b"
// hello.world   | Matches "hello", any character, then "world" | "hello-world", "hello_world"

//* \d+  === \d{1,}
let reg4 = /\d{3,4}/g; // at least three numbers, maximum four numbers

//*   * : matches zero or more occurrences in regex

//* .* : any number of characters
//* .*[A-Z]: any number of characters followed by capital letter

//* .*[!@#$%^&*()\-_+={};<.>]: any number of characters followed by symbol

//^=========================================

//* []: allows you to match any single character inside the brackets

/*
[abc]       Matches any one of 'a', 'b', or 'c'           → a, b, or c

//* we can write ranges inside [] as this
[0-9]       Matches any single digit 0 to 9              → 5, 3, 8, etc.
[A-Z]       Matches any uppercase letter                → B, T, Z, etc.
[a-z]       Matches any lowercase letter                → m, g, x, etc.
[0-9A-F]    Matches hexadecimal digits                 → 3, B, F, etc.

[aeiou]     Matches any vowel                           → a, e, i, o, u


 [^0-9]     //* Matches any NON-digit character
 [^aeiou]   //* Matches any NON-vowel character
*/

//^ example:

let str = "almondo petro";
let regg = /[doa]/;
//* regex will search for any of these characters regardless of the order of these characters
//console.log(reg.test(str)); //* true

// console.log(str.match(reg).join("\n")); //* return only: a, the first match

//* to return all the matches

let regGlobal = /[doa]/g;

//console.log(str.match(regGlobal).join("\n")); //* return all matches

let reg1 = /dao/; //* regex engine will search for exactly matched string (dao)

//*======================================================================

//! 78 – Regular Expression – Grouping

//* Grouping: divide the pattern into sub patterns

//* with grouping, we use exec to view the matches because it has property is called grouping

(function () {})();
//*===============================================================
(function () {
  let str = "image.jpg photo.png name";

  let reg = /\w+\.jpg/g;

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
})();
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

//& usage of ?:

//* its effect depends on its usage place in the pattern

//? first use
//* ?  makes the characters and grouping before it optional

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

//*===================================================================

//! 78 – Regular Expression – Flags

(function () {})();

//?===================================================================================================================

//& Flags:

//^ flag s:
(function () {
  let str = `this flag
matches new line`;

  let reg = /flag.matches/s; //*  . : originally special character matches all except \n, but with flag s, it will match all
  //? same:
  //* reg = /flag[.\n]matches/  ===  /flag.matches/s, but if you have a long pattern use the second form
  let match = str.match(reg);
  // console.log(match);
})();
//?===================================================================================================================

//^ without flag s:
//* it will give null

(function () {
  let str = `this flag
  matches new line`;

  let reg = /flag.matches/;

  let match = str.match(reg);
  // console.log(match); //* null
})();

//*================================================================================================================================================

//! 78 – Regular Expression – Input Boundary Assertions

//* input === search string

//* Input Boundary Assertions are very useful in validation

//& caret ^:
//* ^ is negated character when it puts inside [] or ()

//* but when ^ is placed at first of the pattern, it means the start
//* ^ search at the start

//& $:
//* $ means the end, search at the end

(function () {
  let str = `this flag
    matches new line`;

  let reg = /^flag.matches$/; //* if this pattern comes in the middle of string, it will give null
  //   reg = /^this/;   //* this must be at first
  //   reg = /line$/;   //* line must come at end
  reg = /^this.*line$/; //* null, because . without flag s doesn't match new line
  reg = /^this.line$/s; //* null
  reg = /^this.*line$/s; //* it will match, must add quantifier * to match more than one character
  //? same: with quantifier +
  reg = /^this.+line$/s;

  //console.log(reg.test(str));
  let match = str.match(reg);
  //console.log(match);
})();

//*================================================================================================================================================

//& ^ and $ with flag m:

//* flag m: multi lines

//* ^ and $ without flag m: means start of the text and end of the text
//* ^ and $ with flag m: means start of the line and end of the line

(function () {
  let str = `this flag
      matches new line`;

  let reg = /^this.*line$/m;

  // console.log(reg.test(str)); //* false, because the first line starts yes by this but it doesn't end with line
  let match = str.match(reg);
  // console.log(match); //* null
})();

//?=========================================
(function () {
  let str = `this flag line
      this matches new line`;

  let reg = /^this.*line$/gm; //* place g flag to get more than one match

  // console.log(reg.test(str)); //* true,
  let match = str.match(reg);
  //console.log(match);
})();

//?=========================================

//& ^ and $ with flag i: match the character whether it's capital or small

//* flag i: match the character whether it's capital or small

(function () {
  let str = `this flag line
        this matches new line`;

  let reg = /^this.*LINE$/gim; //* place g flag to get more than one match

  //console.log(reg.test(str)); //* true,
  let match = str.match(reg);
  //console.log(match);
})();

//*================================================================================================================================================

//& Example 1:
(function () {
  let str = `The sun rises over the Red Sea, casting a golden glow on Hurghada's beaches!
2. Early morning joggers take advantage of the cool breeze.
The city slowly awakens, with shopkeepers preparing for the day's business.
3. Tourists eagerly plan their diving excursions to explore the vibrant coral reefs!
4. The aroma of freshly brewed coffee wafts through the air.
Locals and visitors alike gather at cafes to start their day.
5. Children laugh and play in the parks, their joy infectious!
6. As the day progresses, the streets become busier with the hustle and bustle of daily life.
7. The afternoon sun blazes down, prompting many to seek shade or a refreshing swim!
8. Evening brings a cooler breeze and a sense of relaxation.
Families stroll along the promenade, enjoying the view.
9. The sky turns a brilliant shade of orange and pink as the sun sets!
10. Night falls, and the city lights up, ready for another vibrant evening in Hurghada.`;

  //? Requirement:
  //* pattern to match all strings which start by number and it ends with !

  let reg = /^\d.*!$/gm;

  let match = "";
  while ((match = reg.exec(str))) {
    // console.log(match[0]);
  }

  //* This JavaScript code defines a string str containing a descriptive passage about a day in Hurghada, Egypt.
  //* It then uses a regular expression reg to find lines that start with a digit and end with an exclamation mark.
  //* The matches are printed to the console.
})();

//*================================================================================================================================================

//& Example 2:
(function () {
  let str = "image.jpgsgpsp";

  let reg = /(\S+)\.(jpg|png)$/g;

  console.log(reg.test(str)); //* false

  let match = str.match(reg);
  console.log(match);
})();

//& Example 3:

//^ without $
(function () {
  let str = "image.jpgsgpsp";

  let reg = /(\S+)\.(jpg|png)/g;

  console.log(reg.test(str)); //* true

  let match = str.match(reg);
  console.log(match);
})();

//* so input assertions are very useful for validation as you see above in the two last examples
//* validation of file extensions

//*=============================================================================

//! 78 – Regular Expression – Lookahead – Lookbehind

//* Lookahead, one of the most used rule of regular expression

(function () {})();
//?==========================================================================================

//& Without Lookahead
(function () {
  let str = "quantity is 5, the price is 40 USD";

  let reg = /\d+\sUSD/g; // without lookahead
  //* I want a digit or more and then space and then fixed string USD

  console.log(reg.test(str)); //* true
  let match = str.match(reg); //* ['40 USD']
  console.log(match);
})();

//& With lookahead (?=), to remove space and USD from the match

(function () {
  let str = "quantity is 5, the price is 40 USD";

  let reg = /\d+(?=\sUSD)/g; // with lookahead  (?=)
  //* look for this part of pattern \sUSD but don't return it in the match

  console.log(reg.test(str)); //* true
  let match = str.match(reg); //* ['40']
  console.log(match);
})();

(function () {
  let str = "quantity is 5, the price is 40 USD";

  let reg = /\d+(?=\sUSD|\sEU)/g; // with lookahead  (?=)
  //* look for this part of pattern \sUSD but don't return it in the match

  console.log(reg.test(str)); //* true
  let match = str.match(reg); //* ['40']
  console.log(match);
})();

//&  ?! negated lookahead

(function () {
  let str = "quantity is 5, the price is 40 USD";

  let reg = /\d+(?!\sUSD|\sEU)/g; // with lookahead  (?!)
  //* look for all digits that don't have space and USD or EU after it

  console.log(reg.test(str)); //* true
  let match = str.match(reg); //* ['5','4]
  console.log(match);
})();
//?=========================================================================================
//& Lookbehind (?<=)

//* ? and reversed <=

(function () {
  let str = "quantity 5, the price is 40 USD, quantity 6";

  let reg = /(?<=quantity\s)\d+/g; // with lookahead  (?!)
  //* look for the digit right after space and quantity

  console.log(reg.test(str)); //* true
  let match = str.match(reg); //* ['5','6']
  console.log(match);
})();

//& Negated Lookbehind (?<!)

//* ? and reversed <=

(function () {
  let str = "quantity 5, the price is 40 USD";

  let reg = /(?<!quantity\s)\d+/g; // with lookahead  (?!)
  //* look for the digit that not after it space and quantity

  console.log(reg.test(str)); //* true
  let match = str.match(reg); //* ['40']
  console.log(match);
})();
