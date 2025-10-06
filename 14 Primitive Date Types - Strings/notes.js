//! 36 – Strings – UTF-16

//^ reading list

//* string depends on unicode version UTF-16 system

//* UTF is the most common string encoding system

//* UTF is the international standard to represent all languages in computer
//* UTF is founded in 1988
//* there are three standards for the unicode (utf -8 , UTF-16, UTF -32)

//* any string is encoded as a binary to be stored in the computer
//* based on a system which is UTF-16

//* string is founded in 1988

//^ note:
//* smallest unit in the memory is 1 bit
//* but bit can't be used alone, minimum unit to be used is Byte (8 bit)

//* UTF-16 system represents a single character in 16 bit (2 bytes)
//* so to store one character in the memory we need 2 bytes
//* ex. A = 0000000001000001

//* ask chatgpt unicode code point

//* different representations of (د) in hexadecimal (8.png)
//* one element in hexadecimal is 4 bits
//* Hex: 062F, so 0: 4 bits , 6: 4 bits. 06: 8 bit === 1 Byte
//* so 062F is 2 byte
//? different forms of hexadecimal:
//* U+062f
//* 0x062f
//* \u062f

//? There are different number systems in computer:
//* 1- Decimal : system which human understands
//* 2- Binary: system which data stored in computer
//* 3- Hexadecimal and octa (helper or auxiliary systems)

//* official name of one code in unicode is code point

//~ Most programming languages are based on utf-16

//* utf-32 : single character is 32 bit
//* utf-8 : single character is 8 bit

//* utf-32: any character is stored in the memory as 32 bit

//* utf-32 or utf -16 or utf-8, all of them are able to store all the characters

//* utf-8: store the character in memory starts from 8 bit till 32 bit
//* means the character could be stored as one byte or two byte or three bytes or four bytes

//* utf-16: store the character in memory starts from 16 bit till 32 bit
//* character in this system, is stored in two bytes or four bytes

//* utf-32: always store character as 32 bit only (4 bytes)

//* every single emojis and egyptian hieroglyph stored as two characters

//? UTF-16 surrogate pairs:
//* represent the character that is stored as two  (two code points)
//* such as Music symbol (🎼)
//*=====================================================================================
//! 37 – Strings – important functions – part 01

// let txt2 = "Hello, Hello, Ahmed";

//^ search for Ahmed position in txt2

//& Title: Finding All Occurrences of a Substring in a String
//? Note:
//* This function returns all the starting indexes of the pattern's occurrences in the given string.
//* The code now includes a check to break the loop when no further occurrence is found (i.e., index === -1).
//* This prevents an infinite loop and ensures only valid indexes are added to the result array.

function allIndexes(str, pattern) {
  let arr = [];
  // Loop without automatically incrementing i in the for loop header.
  for (let i = 0; i < str.length; ) {
    // Find the next occurrence of 'pattern' starting at index i.
    let index = str.indexOf(pattern, i);

    // If no occurrence is found, break the loop.
    if (index === -1) {
      break;
    }

    // Push the found index into the array.
    arr.push(index);

    // Update i:
    // Increment i to search for the next occurrence after the current found pattern.
    // Use 'index + 1' for overlapping allowed, or 'index + pattern.length' for non-overlapping.
    i = index + 1;
  }
  return arr;
}

//& End of Code

/* 
? Explanation:
//* When searching for substrings using indexOf, if the pattern isn't found, indexOf returns -1.
//* Without checking for -1, the code would push an invalid index (-1) into the array and update 'i' to -1, causing an infinite loop.
//* The check 'if (index === -1)' prevents this by breaking out of the loop when there are no more matches.
//* Additionally, updating 'i' as 'index + 1' ensures that each new search starts just after the previous found occurrence, avoiding repetition.
*/

const allIndexes = allIndexes("Hello, Hello, Ahmed", "Ahmed");
console.log(allIndexes);

//& Title: String Search Methods – Quick Examples & Memory Hook
(() => {
  const text = "Ahmed and Ahmed went to see Ahmed.";

  //? search()
  //* Finds the index of the first match for a regex pattern
  console.log(text.search(/Ahmed/)); // → 0

  //? match() with global flag
  //* Returns array of all matches (strings only)
  console.log(text.match(/Ahmed/g)); // → ["Ahmed", "Ahmed", "Ahmed"]

  //? matchAll()
  //* Returns iterable of match objects (with index info)
  for (const m of text.matchAll(/Ahmed/g)) {
    console.log(`"${m[0]}" at index ${m.index}`);
  }

  //? indexOf() loop
  //* Finds all occurrences without regex
  let idx = text.indexOf("Ahmed");
  while (idx !== -1) {
    console.log(`Found at index ${idx}`);
    idx = text.indexOf("Ahmed", idx + 1);
  }

  //? 💡 Memory Hook:
  //* Need regex + first index? → search()
  //* Need all matches (strings only)? → match() + /g
  //* Need all matches + indexes? → matchAll()
  //* No regex, just substring search? → indexOf() (loop if needed)
})();

//* ask chatgpt for examples for these string methods:

//* search method
//* substring
//* substr
//* charAt

//String Method Examples

const text = "Hello, Ahmed!";

//? search()
//* Finds the index of the first match for a regex pattern.
//* Returns -1 if not found.
console.log(text.search(/Ahmed/)); //* → 7
console.log(text.search(/hello/i)); //* → 0  (case-insensitive with /i flag)

//? substring(start, end)
//* Extracts characters from 'start' index up to (but not including) 'end' index.
//* If 'end' is omitted, goes to the end of the string.
console.log(text.substring(7, 12)); //* → "Ahmed"
console.log(text.substring(0, 5)); //* → "Hello"

//? substr(start, length)
//* Extracts 'length' characters starting from 'start' index.
//* NOTE: substr() is considered legacy but still works in many environments.
console.log(text.substr(7, 5)); //* → "Ahmed"
console.log(text.substr(0, 5)); //* → "Hello"

//? charAt(index)
//* Returns the character at the specified index.
//* If index is out of range, returns an empty string.
console.log(text.charAt(0)); //* → "H"
console.log(text.charAt(7)); //* → "A"
console.log(text.charAt(100)); //* → ""

//*==============================================================================
//! 38 – Strings – important functions – part 02

let txt = "Hello, Hello, Ahmed";

console.log(txt.replace(/\s/g, "")); //* Hello,Hello,Ahmed
//* it will remove all the spaces
//^ note: replace doesn't change the original string
//^ replace without regex, it replaces only the first occurrence

//* ask chatgpt for examples for these string methods:

//* trim method
//* trimStart
//* trimEnd
//* toUpperCase
//* toLowerCase

//& Title: String Methods – Whitespace Trimming & Case Conversion
(() => {
  const str = "   Hello, Ahmed!   ";

  // trim()
  // Removes whitespace from both the start and end of the string
  console.log(str.trim()); // → "Hello, Ahmed!"

  // trimStart()  (alias: trimLeft())
  // Removes whitespace only from the start of the string
  console.log(str.trimStart()); // → "Hello, Ahmed!   "

  // trimEnd()  (alias: trimRight())
  // Removes whitespace only from the end of the string
  console.log(str.trimEnd()); // → "   Hello, Ahmed!"

  const name = "ahmed";

  // toUpperCase()
  // Converts all characters to uppercase
  console.log(name.toUpperCase()); // → "AHMED"

  const shout = "HELLO WORLD";

  // toLowerCase()
  // Converts all characters to lowercase
  console.log(shout.toLowerCase()); // → "hello world"
})();

//*==============================================================================
//! 39 – Strings – Template Literals
//! interview
//? Template Literals:
//* Allow us to do string interpolation (generation)
//* make the part of the string dynamic.

//* if we need to write backtick in the middle we need to escape by using \
let txto = `call \`Mr. Martin      
Carlos this morning`;

//* if string start by a character (like single quote or double quote or backtick) must end with same character and if this character used in the middle , it needs to be escaped

//^==============================================
//! interview:
//? tagged templates and tag function

//* we use tag function to manipulate (apply operations) on the template expression `${num}
//* num here is the template expression`

//^ check: tag function.pdf

//* tag function extract the template expression and we can manipulate it as we want

//~ tag function

//* strings: array of all static strings in the passed string function parameter
//* values: array of all template expressions

function format(strings, ...values) {
  return `${strings[0]} ${values[0].toLocaleString()}${strings[1]}`;
}

let num = 988767334;

console.log(format`The number is ${num}.`); // The number is  988,767,334.

//*===================================================================================================================================
//& Title: Using Tag Function for Safe SQL Query Construction in a Backend Application
//? Note:
//* This code demonstrates how to use a tag function called 'sql' to safely construct SQL query strings.
//* It processes a template literal, properly escaping variables (e.g., strings) to help prevent SQL injection.
//* In production, you would typically use parameterized queries or a dedicated ORM library for robust security.

function sql(strings, ...values) {
  // Initialize the query string.
  let query = "";

  // Loop over each literal part in the template.
  for (let i = 0; i < strings.length; i++) {
    query += strings[i];
    if (i < values.length) {
      let value = values[i];

      // If the value is a string, perform simple escaping by replacing single quotes.
      if (typeof value === "string") {
        value = value.replace(/'/g, "''"); // Escape single quotes by doubling them.
        query += `'${value}'`;
      } else {
        // For non-string values, append them directly.
        query += value;
      }
    }
  }
  return query;
}

// Example backend usage:
// Imagine 'userInput' is a name provided through user input, which might contain harmful characters.
const userInput = "O'Reilly";

// Use the tag function (sql) to safely insert the input into an SQL query.
// we name the tag function here (sql)
const query = sql`SELECT * FROM users WHERE name = ${userInput};`;

console.log(query);
// Expected output: SELECT * FROM users WHERE name = 'O''Reilly';

//& Explanation:
//? The 'sql' tag function is designed to combine the literal strings of a template with embedded values.
//* Each value is checked: if it's a string, it gets escaped (here, single quotes are doubled), which helps protect against SQL injection.
//* In a backend application, this technique provides an extra layer of safety when constructing dynamic SQL queries.
//* Note that for full security in real applications, using parameterized queries provided by database drivers or ORM libraries is recommended.
//& End of Code

//& Title: Explanation of String Escaping in SQL Queries and SQL Injection Vulnerability
//? Note:
//* The purpose of escaping single quotes in a string is to prevent SQL injection attacks.
//* SQL injection occurs when an attacker can insert or "inject" malicious SQL code into your query
//* by manipulating string inputs that are embedded in SQL commands.

// Example without proper escaping:
// Consider a user-provided input that is malicious:
const unsafeInput = "'; DROP TABLE users; --";

// Suppose we dynamically build an SQL query without escaping:
const unsafeQuery = `SELECT * FROM users WHERE name = '${unsafeInput}';`;
console.log("Unsafe Query:", unsafeQuery);
/*
  Output:
  SELECT * FROM users WHERE name = '';
  DROP TABLE users; --';
  
  Explanation:
  - The input terminates the string literal for the name field.
  - It then appends a malicious command 'DROP TABLE users;'
  - The '--' marks the rest of the line as a comment, ignoring any trailing characters.
  - This can lead to deletion of data, or loss of the entire table.
*/

// Example with proper escaping:
// A simple escape function replaces single quotes with two single quotes to neutralize their terminative effect.
function escapeSQLString(str) {
  return str.replace(/'/g, "''");
}

const safeInput = unsafeInput; // In real cases, this would be user input.
const escapedInput = escapeSQLString(safeInput);

// Now build the SQL query with the escaped string:
const safeQuery = `SELECT * FROM users WHERE name = '${escapedInput}';`;
console.log("Safe Query:", safeQuery);
/*
  Output:
  SELECT * FROM users WHERE name = '''; DROP TABLE users; --';
  
  Explanation:
  - Each single quote in the input is replaced by two single quotes.
  - The escaped string no longer ends the initial string literal in the SQL command.
  - The database interprets the malicious part ('; DROP TABLE users; --) just as a literal string,
   not as executable SQL code.
*/

//& Explanation:
//? Why Escape Strings?
//* When constructing SQL queries that include user input, unescaped single quotes can break your string literals.
//* This can allow attackers to inject rogue SQL commands, causing data theft, data corruption, or even complete data loss.
//* By escaping single quotes, you ensure that the input is treated purely as data, preventing it from altering the query structure.
//* Although using parameterized queries (prepared statements) is the recommended practice for security,
//* proper escaping is a crucial concept when such queries are not feasible.
//& End of Explanation

(function () {
  //& Title: Example of Unescaped Single Quotes Leading to SQL Injection
  //? Note:
  //* This simple example shows how not escaping a single quote can alter an SQL query.
  //* The unescaped input terminates the original string, allowing an attacker to inject malicious SQL.

  // Malicious user input that is not escaped.
  const userInput = "'; DROP TABLE users; --";

  // Construct an SQL query using the unescaped user input.
  const unsafeQuery = "SELECT * FROM users WHERE name = '" + userInput + "';";

  console.log("Unsafe Query:", unsafeQuery);

  /*
    Output:
    SELECT * FROM users WHERE name = ''; DROP TABLE users; --';
    
    Explanation:
    The unescaped single quote in the userInput prematurely ends the string literal in the SQL query.
    This allows the malicious part ("DROP TABLE users; --") to be executed, potentially deleting the "users" table.


*/
  //& End of Code
})();

//*==================================================================================
//! 40 – Strings – Task – HTML scraping

//^ open: ourMath folder
//^ open: parse.js

//^ note:
//* The String.fromCodePoint() static method returns a string
//* created from the specified sequence of code points.

//& Title: HTML Symbols – Two Main Types

// Named entity
const named = "&copy;"; // © (copyright sign)

// Numeric entity (decimal)
const decimal = "&#169;"; // ©

// Numeric entity (hexadecimal)
const hex = "&#x00A9;"; // ©

// Decode in browser using DOM
function decodeHtml(str) {
  const el = document.createElement("textarea");
  el.innerHTML = str;
  return el.value;
}

console.log(decodeHtml(named)); // → ©
console.log(decodeHtml(decimal)); // → ©
console.log(decodeHtml(hex)); // → ©

//& Title: Universal HTML Entity Decoder
function decodeHtmlEntities(str) {
  return str.replace(/&(#x?[0-9a-fA-F]+|\w+);/g, (match, entity) => {
    // Numeric (decimal)
    if (entity.startsWith("#") && !entity.startsWith("#x")) {
      return String.fromCodePoint(Number(entity.slice(1)));
    }
    // Numeric (hexadecimal)
    if (entity.startsWith("#x") || entity.startsWith("#X")) {
      return String.fromCodePoint(parseInt(entity.slice(2), 16));
    }
    // Named entity (browser-safe fallback)
    if (typeof document !== "undefined") {
      const el = document.createElement("textarea");
      el.innerHTML = match;
      return el.value;
    }
    // Named entity in Node.js (requires 'he' library for full coverage)
    try {
      const he = require("he");
      return he.decode(match);
    } catch {
      return match; // leave unchanged if no decoding method available
    }
  });
}

// Example usage:
const html = "Hello &copy; 2025 &#169; &#x00A9; and &#8211; dash";
console.log(decodeHtmlEntities(html));
// → Hello © 2025 © © and – dash
