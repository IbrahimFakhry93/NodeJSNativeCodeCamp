//! 67 – Files – Read & Write

//& before you start:
//* cd "C:\1Programming\1 Node JS Cloud Native\NodeJSNativeCodeCamp\File System\Lec 67"

//^ create and open: read_file.js

//* file system commands by node js we use to request from the operating system to read the file

const fs = require("fs");

const file_name = "current_customer.txt";

//& read file methods:

let data = fs.readFileSync(file_name, "utf-8"); //* readFileSync: stop the execution of the code afterwards
// console.log(data);

//* readFileSync doesn't send callback to the event loop
// console.log("END");

//? on console:

/*

010101010100o01eft
END                       //* prove that readFileSync stop the execution of the code afterwards (Sync Operation)


*/

//^ without utf encoding
let data2 = fs.readFileSync(file_name);
//console.log(data2); //* the data will be in buffer array of ascii code of these numbers

/*

Buffer(18) [48, 49, 48, 49, 48, 49, 48, 49, 48, 49, 48, 48, 111, 48, 49, 101, 102, 116, buffer: ArrayBuffer(8192), byteLength: 18, byteOffset: 1008, length: 18, Symbol(Symbol.toStringTag): 'Uint8Array']



*/

//* \r\n: new line in windows

//^ note:
//~ use readFileSync to start an application
//* we need readFileSync to stop the code execution until the file is read
//* we need this at the start of the application, to load and read a configuration file so the application will work with it

//~ using readFileSync in the middle of the application we call it anti-pattern

fs.readFile(file_name, "utf-8", (err, data) => {
  if (err) console.error(err);
  else console.log(data);
});

console.log("END");

//? on console:

/*

END 
010101010100o01eft

*/

//^ note:

//* callbacks are not executed randomly , they are put in queues until all sync code in callstack is executed and callstack becomes empty

//* when operating system finished reading the file, the callback function is sent to i/o queue waiting its turn

//^===============================================

//& Read file with promise
fs.promises.readFile(file_name, "utf-8").then(
  (data) => {
    console.log(data);
  },
  (err) => console.error(err)
);

//& Read File with async/await:
//! error is handled by try / catch statement
async function read() {
  try {
    let data = await fs.promises.readFile(file_name, "utf-8");
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
read();

//*=============================================================================================================================

//& Write File:

//? writeFileSync
(function () {
  const file_name = "new_file.txt";

  fs.writeFileSync(file_name, "content محتوى", "utf-8", (err) => {});
  fs.writeFileSync(file_name, "content محتوى"); //* default is utf-8

  //* writeFileSync pauses the main thread or the main stack
})();

//! Async Approach:

//^ check: writeFile vs fs.promises.writeFile.pdf

//? writeFile

(function () {
  const file_name = "new_file.txt";

  //   fs.writeFile(file_name, "content محتوى", "utf-8", (err) => {});

  //~ with object options (flag)
  //   fs.writeFile(file_name, "content محتوى", { flag: "wx" }, (err) => {
  //     console.error(err.message); //! EEXIST: file already exists, open 'C:\1Programming\1 Node JS Cloud Native\NodeJSNativeCodeCamp\File System\new_file.txt'
  //   });
})();

//* third parameter in file methods
//* node js checks for the third parameter,
//* if it's string so it looks for utf-8
//* if it's function so it expects callback
//* if it's object so it expects options such as mode, flag

//? write file with promises and then method and catch method

(function () {
  const file_name = "new_file.txt";

  // fs.writeFile(file_name, "content محتوى", "utf-8", (err) => {});

  fs.promises
    .writeFile(file_name, "content محتوى")
    .then(() => console.log("file is written"))
    .catch((err) => console.error(err.message));
})();

//? write file with async

(function () {
  async function write() {
    try {
      const file_name = "new_file.txt";

      // fs.writeFile(file_name, "content محتوى", "utf-8", (err) => {});

      await fs.promises.writeFile(file_name, "content محتوى");
    } catch (err) {
      console.error(err.message);
    }
  }
})();
