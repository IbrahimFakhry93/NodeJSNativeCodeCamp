//! 78 – Regular Expression – Flags

(function () {})();

//?===================================================================================================================

//& Flags:

//^ flag s:
(function () {
  let str = `this flag
matches new line`;

  let reg = /flag.matches/s; //* dot matches all even \n, . : originally special character matches all except \n, but with flag s, it will match all
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
