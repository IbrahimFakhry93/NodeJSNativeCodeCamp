//! 75 – Regular Expression – Introduction & Character Classes

//& two usages of regular expressions:

//* 1) validation: validate a certain text contains certain specifications or character or letters
//* 2) text extraction: We extract parts of the text that meet certain specifications. (extract substring of a text)

//* expression === pattern

//* Regular expression is a part of String Search Algorithm
//* the result of this algorithm, multiple strings that share same specifications

//*=======================================================================================================================
//& Required to extract all the emails

let data = `[
    {id: 1, first_name: Titos, last_name: Belcher, email: tbelcher@webnode.com, ip: 55.90.198.6},
    {id: 2, first_name: Lock, last_name: McCord, email: lmccord1@census.gov, ip: 120.38.126.253},
    {id: 3, first_name: Celinka, last_name: Feldon, email: cfeldon2@msu.edu, ip: 196.117.76.115},
    {id: 4, first_name: Zaccaria, last_name: Balogun, email: zbalogun3@newsvine.com, ip: 192.178.0.38},
    {id: 5, first_name: Charles, last_name: Aumerle, email: caumerle4@reverbnation.com, ip: 191.119.139.237},
    {id: 6, first_name: Coleman, last_name: Jerrams, email: cjerrams5@dell.com, ip: 10.121.96.209},
    {id: 7, first_name: Zared, last_name: Shreeves, email: zshreeves6@cbc.edu, ip: 185.70.114.128},
    {id: 8, first_name: Asia, last_name: Satyford, email: asatyford7@usda.gov, ip: 73.139.215.11},
    {id: 9, first_name: Shirlee, last_name: Murrey, email: smurrey8@sfgate.edu, ip: 242.89.246.203},
    {id: 10, first_name: Penn, last_name: Munks, email: pmunks9@ezinearticles.com, ip: 188.132.223.58}
    ]`;

//& two forms to declare regular exp variable in js
//* expression === pattern

//* 1) regular expression literal
//* 2) Object Regex

//~ let reg = /pattern/; // regular expression literal

//* eventually regular expression literal converts into object Regex

//~ let rego = new RegExp("pattern", "flags");

//* using RegExp allows to pass to it dynamic pattern (dynamic or generic inputs or variables)

//& two ways to use the regular exp variable

//* use here means, to get the matches
//? results of regular expressions are called matches

//^ example:
//* website address === domain
//* tld : toplevel domain  === .com

let tld = "com"; //* we mutate to 'gov' 'edu'  as the user likes, the user can mutate form an UI interface

let emailPatternObj = new RegExp("[\\w]+@[\\w]+\\." + tld, "g"); //* g is flag, without flag g, the regex will stop searching after first match
// let emailPatternObj = new RegExp("\\w+@\\w+\\." + tld, "g");    //! no difference if without square brackets

let emails1 = data.match(emailPatternObj); //* return array, if nothing matches, it returns null
// if (emails1 != null) console.log(emails1.join("\n"));

/*

tbelcher@webnode.com
zbalogun3@newsvine.com
caumerle4@reverbnation.com
cjerrams5@dell.com
pmunks9@ezinearticles.com


*/
let emailPatternRegexLiteral = /[\w]+@[\w]+\.[a-z]{2,}/g;

//^ {2,} : number of characters minium to be 2, at least two characters

//let emails = data.match(emailPatternRegexLiteral); //* return array, if nothing matches, it returns null
// if (emails != null) console.log(emails.join("\n"));

//? other way to get the matches by RegExp
//* using, exec method
//* and since eventually regular expression literal converts into object RegExp

//* so we can use apply exec method on regular expression literal

let email3 = emailPatternRegexLiteral.exec(data);
//console.log(email3); //* it will return only first match

//* to get all the matches, you have to use .exec more than one time as this:

// console.log(emailPatternRegexLiteral.exec(data))
// console.log(emailPatternRegexLiteral.exec(data))
// console.log(emailPatternRegexLiteral.exec(data))

//^ solution:
//* use while loop until exec returns null
let matches = "";
while ((matches = emailPatternRegexLiteral.exec(data))) {
  //   console.log(matches[0]);
}

//* we use exec in case we need to do implementation or decision in every match

//*=======================================================================================================================

//& Character classes of regular expressions

let exp = /[\w]+@[\w]+\.[a-z]{2,}/g;

//* []: allows you to match any single character inside the brackets

/*
[abc]       Matches any one of 'a', 'b', or 'c'           → a, b, or c

//* we can write ranges inside [] as this
[0-9]       Matches any single digit 0 to 9              → 5, 3, 8, etc.
[A-Z]       Matches any uppercase letter                → B, T, Z, etc.
[a-z]       Matches any lowercase letter                → m, g, x, etc.
[0-9A-F]    Matches hexadecimal digits                 → 3, B, F, etc.

[aeiou]     Matches any vowel                           → a, e, i, o, u

*/

//^ example:

let str = "almondo petro";
let reg = /[doa]/;
//* regex will search for any of these characters regardless of the order of these characters
//console.log(reg.test(str)); //* true

// console.log(str.match(reg).join("\n")); //* return only: a, the first match

//* return all the matches

let regGlobal = /[doa]/g;

//console.log(str.match(regGlobal).join("\n")); //* return all matches

let reg1 = /dao/; //* regex engine will search for exactly matched string (dao)
//console.log(reg1.test(str)); //* false

//?=====================================================

//~ hyphen character (-)

//* hyphen character (-) represent range in regex

// so if we want to extract hyphen charcter(-) as regular character not as range
// we put it, at first or at end of the regex inside []
let str_hyphen = "almondo-petro";

let regHyphen = /[-A-Z]/g; //* we put it at first
//? or also this works:
let regHyphen1 = /[&-*A-Z]/g; //* here doesn't mean range, it means regular hyphen too
console.log(str_hyphen.match(regHyphen).join("\n"));

//~ Negating [ ] with ^ (Caret)
//* Adding ^ inside [ ] negates the match, meaning it matches anything EXCEPT the characters listed.

// [^0-9]     //* Matches any NON-digit character
// [^aeiou]   //* Matches any NON-vowel character

//?=====================================================

//~ the dot (.) character

/*
//* In regular expressions, the dot (.) character is a wildcard that matches any single character except a newline (\n).

Examples of Using . in Regex:
----------------------------------------------------
Pattern        | Explanation                         | Matches
----------------------------------------------------
c.t           | Matches any three-character string  | "cat", "cot", "cut", "c9t"
..            | Matches any two characters         | "ab", "9G", "X!"
a.b           | Matches "a", any character, then "b" | "axb", "a_b", "a2b"
hello.world   | Matches "hello", any character, then "world" | "hello-world", "hello_world"

Exception: Dot Doesn’t Match Newlines
By default, . does **not** match line breaks (\n).
To allow dots to match across multiple lines, use **dot-all mode (s flag):**
----------------------------------------------------
/hello.world/s   → Matches:
----------------------------------------------------
hello
world
----------------------------------------------------
*/

let strDot = "Ibrahim Petro";

let regDot = /p.../;

console.log(regDot.test(str)); //* true

//^ or use quantifier (+)
console.log(str.match(regDot).join("\n")); //* petr
(function () {
  let strDot = "Ibrahim Petro";

  let regDot = /p.+/i; //* /p.+/i  === /p.{1,}/i

  //* flag i: means match uppercase or lowercase

  console.log(regDot.test(strDot)); //* true

  console.log(strDot.match(regDot).join("\n")); //* Petro
})();
//*==================================================================================================
/*
^(?=(.*[A-Z]){2,})(?=(.*[!@#$%^&*()\-_+={};<.>]){2,}).{12,}$

Explanation of the Regular Expression:
- Must contain at least 2 uppercase letters (?=(.*[A-Z]){2,}).
- Must contain at least 2 special characters (?=(.*[!@#$%^&*()\-_+={};<.>]){2,}).
- Must be at least 12 characters long (.{12,}$).

This ensures that the input meets complexity requirements, commonly used for password validation.
*/
