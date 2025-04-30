//! 81 – Regular Expression – How to write a complex expression
(function () {})();
//?==========================================================================================

// ^(?=(.*[A-Z]){2,})(?=(.*[!@#$%^&*()\-_+={};<.>]){2,}).{12,}$

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

//?==========================================================================================

//& Example:

//* Validate an email

//* email is divided into parts
//* email name (address) which is the part on the left of the @
//* domain name on the right of @

//* address@domain.tld

//* address@domain.com

//? restrictions:
//* any group of chars that contains only one @ and doesn't contain space
//* no more than one dot in the email name (address)
//* no more than one digits in the email name (address)
//* the part after @ may contains from 1 to 2 dots only ==== ahmed82@uni.edu.eg
//* the total length between 10 and 50

(function () {
  let data = "ahmed82@uni.edu.eg";

  let reg2 = /^(?=\.?)\S+@(?=\.{1,2})\S{10,15}$/;

  console.log(reg2.test(data));
})();
