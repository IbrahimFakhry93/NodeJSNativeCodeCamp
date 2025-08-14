//! 68 – Files – Append

//& before you start:
//* cd "C:\1Programming\1 Node JS Cloud Native\NodeJSNativeCodeCamp\File System\Lec 68"

fs = require("fs");

const file_name = "new_file.txt";
//* \n: new line

// fs.appendFile(file_name, "\nnew line", (err) => {
//   if (err) console.log(err);
//   else console.log("file is written");
// });

//& append file with promise

// fs.promises.appendFile(file_name, "another new line \n", "utf-8").then(
//   () => {
//      console.log("file is written");
//   },
//   (err) => console.log(err)
// );

//& append file with async/await

async function append() {
  try {
    await fs.promises.appendFile(file_name, "another new line \n", "utf-8");
    console.log("file is written");
  } catch (err) {
    (err) => console.log(err);
  }
}

// append();

//*===================================================================

//! 68 – Files - Read Stream

//* read file stream for large files (in Megabytes)
//* read the file part by part (part by part as stream)

//^ create reader object and it's event too
// let reader = fs.createReadStream(file_name, {
//   encoding: "utf-8",
//   highWaterMark: 3, // default 64K
// });

//* highWaterMark: represents number of characters to be read at one time

// reader.on("data", (chunk) => {
//   console.log(chunk);
//   console.log("=========================================");
// }); //* emit events after finish reading

// reader.on("error", (err) => {
//   console.error(err);
// });

//* when finishing reading
//* at the end of stream
// reader.on("close", () => {
//   console.log("read stream is closed");
// });

//*======================================================================================================================================================

(function () {
  const file_name = "readstream.txt";

  let reader = fs.createReadStream(file_name, {
    encoding: "utf-8",
    highWaterMark: 5000, // default 64K
    // start: 8813,
    // end: 8918,
  });

  reader.on("data", (chunk) => {
    console.log(chunk);
    console.log(
      "==========================================================================================================================================="
    );
  }); //* emit events after finish reading

  reader.on("error", (err) => {
    console.error(err);
  });

  //* when finishing reading
  //* at the end of stream
  reader.on("close", () => {
    console.log("read stream is closed");
  });
})();
