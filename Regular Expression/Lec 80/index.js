//! 78 – Regular Expression – Lookahead – Lookbehind

//* Lookahead – Lookbehind both unofficially are called Lookaround

//* we use lookahead and lookbehind, to assure there is a certain specification exists in the pattern
//* but we don't want to return in it in the matches
//* and the current position doesn't change (I don't understand this)

//* Regex originally does a main loop over the search string to search for the pattern but when it finds lookahead or lookbehind
//* with lookahead and lookbehind Regex engine make another loop to search for lookahead or lookbehind pattern then return to last position of the main loop

//* Lookahead, one of the most used rule of regular expression, they are used more for text validation
//* rather than text extraction

(function () {})();
//?==========================================================================================

//& Without Lookahead

//* extract the price of the text
(function () {
  let str = "quantity is 5, the price is 40 USD";

  let reg = /\d+\sUSD/g; // without lookahead
  //* I want a digit or more and then space and then fixed string USD

  console.log(reg.test(str)); //* true
  let match = str.match(reg); //* ['40 USD']
  console.log(match);
})();

//& With lookahead (?=), to remove space and USD from the match

//* extract the price of the text but without USD
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

//*=======================================================================

//& Title: Regular Expressions – Lookahead & Lookbehind (Lookaround)
//
//? Overview:
//* Lookahead and Lookbehind, collectively known as "Lookaround," are zero-width assertions.
//* They let you check for certain patterns relative to a position in the string without "consuming"
//* any characters as part of the match.
//* That is, they verify conditions without including those parts in the returned result.
//
//? Lookahead:
//* Lookahead assertions check if a given pattern exists immediately after the current position.
//* They come in two forms:
//*   1. Positive Lookahead (?=...)
//*      - Ensures that a specific pattern follows.
//*      - Example: /foo(?=bar)/ will match "foo" only if it is immediately followed by "bar".
//*   2. Negative Lookahead (?!...)
//*      - Ensures that a specific pattern does NOT follow.
//*      - Example: /foo(?!bar)/ will match "foo" only if it is NOT immediately followed by "bar".
//
// Example of Positive Lookahead:
let text1 = "foobar";
let regexPosLookahead = /foo(?=bar)/; // Matches "foo" when "bar" follows it
console.log(text1.match(regexPosLookahead)); // Output: ["foo"]
//
// Example of Negative Lookahead:
let text2 = "football";
let regexNegLookahead = /foo(?!bar)/; // Matches "foo" when it is not followed by "bar"
console.log(text2.match(regexNegLookahead)); // Output: ["foo"]
//
//? Lookbehind:
//* Lookbehind assertions check if a given pattern exists immediately before the current position.
//* They also have two forms:
//*   1. Positive Lookbehind (?<=...)
//*      - Ensures that a specific pattern precedes the match.
//*      - Example: /(?<=foo)bar/ will match "bar" only if it is immediately preceded by "foo".
//*   2. Negative Lookbehind (?<!...)
//*      - Ensures that a specific pattern does NOT precede the match.
//*      - Example: /(?<!foo)bar/ will match "bar" only if it is NOT immediately preceded by "foo".
//* Note: Lookbehind is supported in modern JavaScript (ES2018+).
//
// Example of Positive Lookbehind (ES2018+):
let text3 = "foobar";
let regexPosLookbehind = /(?<=foo)bar/; // Matches "bar" when preceded by "foo"
console.log(text3.match(regexPosLookbehind)); // Output: ["bar"]
//
// Example of Negative Lookbehind (ES2018+):
// Here, we look for "bar" not preceded by "foo":
let text4 = "testbar";
let regexNegLookbehind = /(?<!foo)bar/;
console.log(text4.match(regexNegLookbehind)); // Output: ["bar"]
//
//? Under-the-Hood Details:
//* Normally, a regex engine loops over the input string to find matches.
//* When it encounters a lookahead or lookbehind, it performs an internal (sub)routine to check if the specified pattern
//* exists at that position, but without moving the main position pointer forward or backward.
//* This means the overall match remains "zero-width" – the engine checks the condition and then returns to the original position
//* in the main loop to continue matching. This is why lookahead/lookbehind helps to validate context without affecting the match itself.

//*=====================================================================================================

(function () {
  //& Title: Understanding "Current Position" in Regex Lookahead
  //
  //? Explanation:
  //* When a regex pattern is applied to a string, the engine moves through the string character by character.
  //* The "current position" refers to the point (or index) in the string where the engine is checking for a match.
  //* In the context of a lookahead, this position is immediately after the part of the text that has already been matched.
  //* Lookahead assertions (like (?=...)) check whether a certain pattern exists at this current position, without consuming any characters.
  //* That’s why they're called “zero-width” – they verify conditions at a specific spot but don’t advance the match pointer.
  //
  //? Concrete Example Using /foo(?=bar)/:
  //* For the string "foobar":
  //*   1. The regex first looks for "foo" and successfully finds it at the beginning of the string.
  //*   2. Once "foo" is matched, the current position becomes the point right after "foo" (right before "bar").
  //*   3. The positive lookahead (?=bar) then checks if "bar" exists starting from that current position.
  //*   4. Since "bar" is indeed found at that position, the overall regex matches "foo".
  //*
  //* This check happens without moving the current position forward, meaning the lookahead only asserts the condition
  //* but does not include "bar" in the actual match.
  //
  // Example:
  let text1 = "foobar";
  let regexPosLookahead = /foo(?=bar)/; // Matches "foo" only when "bar" immediately follows it
  console.log(text1.match(regexPosLookahead)); // Output: ["foo"]
  //
  //? Additional Example:
  //* Consider the string "fooabc". Here, "foo" would be matched, but since "abc" does not fulfill the lookahead (?=bar),
  //* the condition fails, and the regex engine does not return a match.
  let text2 = "fooabc";
  console.log(text2.match(regexPosLookahead)); // Output: null
  //
  //? Summary:
  //* In essence, the "current position" is the precise spot where the regex engine verifies a lookahead condition.
  //* It is the boundary right after a successful match (in our example, right after "foo") where the engine checks for the presence
  //* of a subsequent pattern (here, "bar") without consuming those characters.
})();

//*================================================================================================================

//& Title: Detailed Explanation of Regex with Lookahead
//
//? Regex Pattern Under Analysis:
//   ^(?=(.*[A-Z]){2,})(?=(.*[!@#$%^&*()\-_+={};<.>]){2,}).{12,}$
//
//? Component Breakdown:
//
//* 1. ^
//*    - Start-of-string anchor. This makes sure matching begins at the very start of the string.
//
//* 2. (?=(.*[A-Z]){2,})
//*    - This is a positive lookahead assertion, which checks (without consuming any characters) that:
//*        • There are at least 2 occurrences of uppercase letters in the string.
//*        • The part (.*[A-Z]) means "match any characters (or none) until an uppercase letter is found".
//*        • The {2,} quantifier ensures that this pattern occurs at least twice.
//*    - **Current Position Context:** When the regex engine reaches this lookahead,
//*      it is at a specific position in the string (initially the start). The lookahead then
//*      scans forward from that position to confirm that there are at least two uppercase letters somewhere in the string.
//*      However, after this check, the engine's overall matching position does not advance; it remains where it was.
//
//* 3. (?=(.*[!@#$%^&*()\-_+={};<.>]){2,})
//*    - This is another positive lookahead assertion that ensures:
//*        • There are at least 2 occurrences of any of the specified special characters.
//*        • The character set [!@#$%^&*()\-_+={};<.>] defines which symbols are allowed.
//*        • Similar to the uppercase lookahead, (.*[!@#$%^&*()\-_+={};<.>]) scans for any characters (or none) followed by one of these special characters,
//*          and {2,} requires this to happen at least twice.
//*    - **Current Position Context:** As with the uppercase check, the engine asserts that from the current position,
//*      the overall string contains at least two of these special characters without moving the matching pointer.
//
//* 4. .{12,}
//*    - This final part of the regex actually "consumes" characters by matching any character (except newline)
//*      12 or more times. It establishes that the entire string must be at least 12 characters long.
//
//* 5. $
//*    - End-of-string anchor. This ensures the match continues right until the end, confirming the whole string complies
//*      with the pattern.
//
//? How It All Works Together:
//* - The regex engine starts at the beginning of the string (^) and first checks the lookahead assertions.
//* - The lookaheads verify two conditions without consuming any characters:
//*    1. There must be at least 2 uppercase letters in the string.
//*    2. There must be at least 2 special characters from the defined set.
//* - After these conditions are confirmed, the engine then uses .{12,} to match through the entire string,
//*   ensuring it has at least 12 characters.
//* - The anchors (^) and ($) guarantee that these criteria apply to the entire string.
//* - **The "current position" in the context of lookahead** is the point in the string where the lookahead assertion is applied,
//*   and it remains unchanged after the assertion check. The lookahead only *asserts* a condition; it does not "consume" or move past that part of the string.
//
//? Example Usage:
//* This regex could be used for password validation rules where the password must be at least 12 characters long,
//* contain at least 2 uppercase letters, and have at least 2 special characters.
console.log("Example validation:");

// A valid example: 12+ characters, contains at least 2 uppercase letters (A, G), and 2 special characters ('!' and '@').
let sample1 = "Abcdef!Ghi@v";
let regex = /^(?=(.*[A-Z]){2,})(?=(.*[!@#$%^&*()\-_+={};<.>]){2,}).{12,}$/;
console.log("Sample 1 Valid:", regex.test(sample1)); // Expected: true

// An invalid example: missing required uppercase letters or special characters.
let sample2 = "abcdef!ghi@"; // No uppercase letters present.
console.log("Sample 2 Valid:", regex.test(sample2)); // Expected: false

//*====================================================================================================================

//& Title: Effect of Removing Lookahead Assertions from the Regex Pattern
//
//? Original Pattern (with lookahead):
//* /^(?=(.*[A-Z]){2,})(?=(.*[!@#$%^&*()\-_+={};<.>]){2,}).{12,}$/
//*
//* This regex checks three conditions:
//*   1. The positive lookahead (?=(.*[A-Z]){2,}) asserts that, from the start (^), there are at least 2 uppercase letters
//*      somewhere in the string.
//*   2. The positive lookahead (?=(.*[!@#$%^&*()\-_+={};<.>]){2,}) asserts that there are at least 2 special characters
//*      (from the set provided) anywhere in the string.
//*   3. The expression .{12,} then ensures that the entire string is at least 12 characters in length.
//*
//* Key Point: Lookahead assertions (?=...) are "zero-width." They only check for the presence of a pattern without consuming
//* any characters. This means the checks for uppercase and special characters are performed independently of the main match,
//* allowing these characters to appear anywhere in the string, regardless of order.
//
//? Modified Pattern (without lookahead):
//* /^(.*[A-Z]){2,}(.*[!@#$%^&*()\-_+={};<.>]){2,}.{12,}$/
//*
//* Here, by simply removing the ?=, the parts that used to be lookaheads become ordinary capturing (or matching) groups.
//* The effect is significant:
//*   - The group (.*[A-Z]){2,} actively consumes characters from the string. It now must match a segment beginning at
//*     the start (^) that contains at least 2 uppercase letters.
//*   - Immediately following that, (.*[!@#$%^&*()\-_+={};<.>]){2,} must match a segment that contains at least 2 special
//*     characters.
//*   - Finally, .{12,} expects additional characters so that the total length of the string is at least 12.
//*
//* Difference in Behavior:
//*   - **Ordering Matters:** Without lookahead, the regex enforces a strict order. The uppercase letters have to appear
//*     in the portion of the string matched by the first group, and the special characters must immediately follow in the
//*     matched segment of the second group. They can’t be interleaved or appear anywhere in any order.
//*   - **Character Consumption:** The groups now consume parts of the string. This prevents the regex from “checking” the
//*     entire string for the required characters, as the characters become part of the matched segments.
//*   - **Flexibility Loss:** With lookahead, the regex only validates the conditions without dictating where those
//*     characters must occur. Removing the lookaheads forces the string to have a structure where one subsequence contains
//*     the uppercase letters and another contains the special characters, which is often not the intended use in validations.
//
//? Example with a Sample String:
//
let sample = "abcDef!Ghi@i";
// Sample string explanation:
//   - Total length: 13 characters (satisfies .{12,})
//   - Contains at least 2 uppercase letters: 'D' and 'G'
//   - Contains at least 2 special characters: '!' and '@'
//
// Using the original regex (with lookahead) – flexible order:
let regexWithLookahead =
  /^(?=(.*[A-Z]){2,})(?=(.*[!@#$%^&*()\-_+={};<.>]){2,}).{12,}$/;
console.log("With Lookahead:", regexWithLookahead.test(sample)); // Expected: true
//
// Using the modified regex (without lookahead) – enforces sequential matching:
let regexWithoutLookahead =
  /^((.*[A-Z]){2,})((.*[!@#$%^&*()\-_+={};<.>]){2,}).{12,}$/;
console.log("Without Lookahead:", regexWithoutLookahead.test(sample));
//* Expected: Likely false, because even though the sample has the required characters,
//* they are not grouped sequentially as required by the non-lookahead pattern.
//* The original design allowed uppercase and special characters to occur anywhere in the string,
//* whereas the modified pattern forces them to appear in a specific order.
