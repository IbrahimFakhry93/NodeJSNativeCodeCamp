const text = "Ahmed and Ahmed went to see Ahmed.";
// console.log(...text.matchAll(/Ahmed/g));

//* Returns iterable of match objects (with index info)

for (const m of text.matchAll(/Ahmed/g)) {
  console.log(m);
  break;
  // console.log(`"${m[0]}" at index ${m.index}`);
}

//*============
function format(strings, ...values) {
  return `${strings[0]} ${values[0].toLocaleString()} ${strings[1]}`;
}

let num = 988767334;

console.log(format`The number is ${num}.`);
