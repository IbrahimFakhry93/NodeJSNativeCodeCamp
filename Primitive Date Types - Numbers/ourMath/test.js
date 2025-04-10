const ourMath = require("./index");

// const avg = ourMath.calcAvg(2, 4);
// console.log(avg);

// if (avg === 3) console.log("avg success");
// else console.log("avg fail");

const unionSets = ourMath.unionSets([1, 2, 3], [4, 5, 6]);
console.log(unionSets);
if (
  unionSets[0] === 1 &&
  unionSets[1] === 2 &&
  unionSets[2] === 3 &&
  unionSets[3] === 4 &&
  unionSets[4] === 5 &&
  unionSets[5] === 6
)
  console.log("union success");
else console.log("union fail");
//*=============================================
const InterSets = ourMath.InterSets([1, 2, 3], [1, 2, 3, 4]);
console.log(InterSets);
if (InterSets[0] === 1 && InterSets[1] === 2 && InterSets[2] === 3)
  console.log("INTER success");
else console.log("INTER fail");
//*=============================================
const max = ourMath.maxNum(90, 123, 55);
console.log(max);
if (max === 123) console.log("max success");
else console.log("max fail");
//*=============================================
const min = ourMath.minNum(-1, 0, 55);
console.log(min);
if (min === -1) console.log("min success");
else console.log("min fail");
//*=============================================
const diffSet = ourMath.diffSets([1, 2, 3, 6], [1, 2, 3, 4]);
console.log(diffSet);
// if (diffSet[0] === 1 && diffSet[1] === 2 && diffSet[2] === 3)
//   console.log("diff success");
// else console.log("diff fail");
//*=============================================
const allIndexes = ourMath.allIndexes("Hello, Hello, Ahmed", "Hello");
console.log(allIndexes);
if (allIndexes[0] === 0 && allIndexes[1] === 7) console.log("allindex success");
else console.log("allindex fail");

//*=============================================
let txt = "Hello, Hello, Ahmed";

console.log(txt.replace(/\,/g, "")); //* Hello Hello Ahmed

//*=============================================

l;
