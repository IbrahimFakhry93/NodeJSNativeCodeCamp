//! 69 – Files – Existence – Copy – Directories

//& before you start:
//* cd "C:\1Programming\1 Node JS Cloud Native\NodeJSNativeCodeCamp\File System\Lec 69"

fs = require("fs");

const file_name = "new_file.txt1";

//& File Existence:

//^ create exists.txt

// fs.stats(file_name, (err, stats) => {
//   console.log(stats); //* stats hold information about the file
//   console.log(stats.isFile()); //* true
//   console.log(stats.isDirectory()); //* false: it's not directory ,not folder
// });

//^ according to Node JS documentation
// Using `fs.stat()` to check for the existence of a file before calling `fs.open()`,
// `fs.readFile()`, or `fs.writeFile()` is not recommended.
// Instead, user code should open/read/write the file directly and handle the error
// raised if the file is not available.

//^ so use this instead:

// fs.readFile(file_name, "utf-8", (err, data) => {
//   if (err) {
//     if (err.message.includes("no such file or directory"))
//       console.error("file doesn't exist");
//     else console.error(err);
//   } else console.log(data);
// });

// fs.readFile(file_name, "utf-8", (err, data) => {
//   (err && err.message.includes("no such file or directory")
//     ? !console.err("file doesn't exist")
//     : "") || console.log(data);
// });

//^ note: console.log doesn't return a value, returns undefined

// fs.readFile(file_name, "utf-8", (err, data) => {
//   if (err && err.message.includes("no such file or directory")) {
//     console.error("file doesn't exist");
//     return; // Prevent further execution
//   }
//   console.log(data);
// });

//*========================================================================================================

//& Copy:

//^ open folder copy

const source = "costumersData.txt";

const destination = "./copy/customers.txt";

// fs.copyFile(source, destination, (err) => {
//   if (err) console.error(err.message);
//   else console.log("file is copied");
// });
//*========================================================================================================

//& Directories

// (function () {
//   const source = "costumersData.txt";

//   const destination = "./copy/customers.txt";
//   const dir = "./copy";

//   async function copy() {
//     try {
//       //* 1) read the directory
//       let files = await fs.promises.readdir(dir);
//       console.log(files);
//     } catch (err) {
//       if (err && err.message.includes("no such file or directory")) {
//         //* 2) if directory not existed
//         try {
//           //* 3) make directory
//           await fs.promises.mkdir(dir);
//           console.log("directory is created");
//         } catch (mkdir_err) {
//           console.error(mkdir_err);
//           process.exit(1);
//         }
//       }
//     }

//     console.log("start copying...");

//     try {
//       await fs.promises.copyFile(source, destination);
//       console.log("file is copied");
//     } catch (err) {
//       console.error(err.message);
//     }
//   }

//   copy();
// })();

(function () {
  const source = "costumersData.txt";
  const destination = "./copy/customers.txt";
  const dir = "./copy";

  async function copy() {
    console.log("check and create the directory");
    try {
      let files = await fs.promises.readdir(dir);
      console.log(files);
    } catch (err) {
      console.error(err.message);
      if (err && err.message.includes("no such file or directory")) {
        try {
          await fs.promises.mkdir(dir);
          console.log("directory is created");
          files = await fs.promises.readdir(dir);
          console.log(files);
        } catch (err) {
          console.error(err.message);
          process.exit(1);
        }
      }
    }

    console.log("start copying");

    try {
      await fs.promises.copyFile(source, destination);
      console.log("file is copied");
      files = await fs.promises.readdir(dir);
      console.log(files);
    } catch (err) {
      console.error(err.message);
    }
  }

  copy();
})();

//*====================================================================================================================================================

//& temporary directory

fs.mkdtemp("tmp-", (err, folder) => {
  if (err) {
    console.log(err);
  } else {
    console.log("temp path is:", folder);
  }
});
//* This code uses Node.js's fs.mkdtemp() function to create a temporary directory.
//* It takes a string as the prefix for the directory name, and the callback function handles errors or logs the newly created directory path.
//*====================================================================================================================================================
