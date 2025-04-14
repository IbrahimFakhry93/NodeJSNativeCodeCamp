/*

while(condition){

body

}

*/
//* before any iteration in while, this condition is being checked
//* if this condition is true, the code executed

function n() {
  return 3;
}

let i = 0;

while (i < n()) {
  // console.log(i);
  i++; //*  without this condition , it will cause infinity loop or stackoverflow
}
// console.log("============================");
for (let i = 0; i < n(); i++) {
  // console.log(i);
}

//*============================================================
// console.log("============================");
function n() {
  return Math.floor(Math.random() * 10);
}

while (n() !== 3) {
  console.log(n());
}

//* while is better when there is no need for counter

console.log("============================");
for (; n() !== 3; ) {
  console.log(n());
}

//*=================================================

//* do while form is used when we need condition to occur at least one time

//* in do while: the code body executed first
/*

do{
body
}while(condition)

*/
do {
  console.log("hello from do while");
} while (false);

//*=============================

//* npm init
//* npm i prompt-sync

const prompt = require("prompt-sync")();
//* package to receive data from the user by the console

let input = "";

do {
  input = prompt("write anything");
} while (input != "q"); //* q for quit, the user exits the application

//* while loop is a solution for loops that don't depend on counters
