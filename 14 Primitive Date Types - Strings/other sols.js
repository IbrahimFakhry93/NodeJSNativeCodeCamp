function allIndexes(str, pattern) {
  return [...str.matchAll(new RegExp(pattern, "g"))];
}

console.log(allIndexes("Hello, Hello, Ahmed", "Ahmed")); /* 

[
  [
    'Ahmed',
    index: 14,
    input: 'Hello, Hello, Ahmed',
    groups: undefined
  ]
] */

//* matchAll returns an iterator of RegExpMatchArray objects.

//? A RegExpMatchArray is basically:
// An array of matched strings — index 0 is the entire match, 1+ are captured groups.
// It also has extra properties like .index, .input, and .groups attached.

// JavaScript arrays are just objects under the hood, so they can have both:
// Indexed elements ([0], [1], etc.)
// Named properties (index, input, etc.)
// The dev tools print it with square brackets [] to indicate “this is an array,” and then inline the extra key–value pairs.

//* So use map to loop over RegExpMatchArray above
function allIndexes2(str, pattern) {
  return [...str.matchAll(new RegExp(pattern, "g"))].map((m) => m.index);
}

console.log(allIndexes2("Hello, Hello, Ahmed", "Ahmed"));
// → [14]

//! note:

// ❌ SyntaxError
// const arr = [
//   'Ahmed',
//   index: 14, //! illegal here
//   input: 'Hello, Hello, Ahmed', //! illegal here
//   groups: undefined //! illegal here
// ];

//! why?
//* look up: RegExpMatchArray_Deep_Dive.pdf

//*=================================

//! All other possible solutions

//? 1️⃣ Using String.matchAll()  (Modern & Readable)
function allIndexes(str, pattern) {
  //* matchAll returns an iterable of all matches with their .index property
  //* No need to manually update loop counters
  //* Very concise and still clear
  //* Supports regex patterns (escape special chars if pattern is plain text)
  return [...str.matchAll(new RegExp(pattern, "g"))].map((m) => m.index);
}

console.log(allIndexes("Hello, Hello, Ahmed", "Ahmed"));
//* → [14]

//? 2️⃣ Using RegExp.exec() in a Loop  (Old-School & Flexible)
function allIndexesExec(str, pattern) {
  //* Works in older environments
  //* Gives explicit loop control (less manual than indexOf tracking)
  let result = [];
  let regex = new RegExp(pattern, "g");
  let match;
  while ((match = regex.exec(str)) !== null) {
    result.push(match.index);
  }
  return result;
}

console.log(allIndexesExec("Hello, Hello, Ahmed", "Ahmed"));
//* → [14]

//? 3️⃣ If Pattern is a Single Character
function allIndexesChar(str, char) {
  //* For single‑char patterns, split() + forEach can work
  let indexes = [];
  str.split("").forEach((c, i) => {
    if (c === char) indexes.push(i);
  });
  return indexes;
}

//* Example:
console.log(allIndexesChar("banana", "a"));
//* → [1, 3, 5]

//? 💡 Pro Tip: Overlapping Matches
function allIndexesOverlap(str, pattern) {
  //* matchAll and exec with "g" won't catch overlaps
  //* Use a lookahead regex to find every possible start position
  const re = new RegExp(`(?=${pattern})`, "g");
  return [...str.matchAll(re)].map((m) => m.index);
}

console.log(allIndexesOverlap("aaaa", "aa"));
//* → [0, 1, 2]
