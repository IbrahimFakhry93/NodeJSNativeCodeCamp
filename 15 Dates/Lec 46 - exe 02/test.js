// test.js (ESM)
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

/* 

- read file and assign file data to string variable
- split the data by end of line '\n'
- loop for each line (for each person)
- - split the line data by ','
- - use country and language code along with timezone to format the birth date
- - calculate the age
- - add the age to the person data
- - construct the final paragraph
- - append paragraph to string variable
- write new file

*/

/*
required output paragraph:

" id - name is born in country on local_datetime
his/her age in october 2025 will be almost diff years
his/her contact information: email

"

*/

// __dirname replacement in ESM
const __filename = fileURLToPath(import.meta.url);
console.log(__filename);
const __dirname = path.dirname(__filename);
console.log(__dirname);

const csvFilePath = path.join(__dirname, "MOCK_DATA.csv");

fs.readFile(csvFilePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading the file:", err);
    return;
  }
  data = manipulateData(data);

  console.log(data);
});

function manipulateData(data) {
  const arrData = data.split("\n");
  // console.log(arrData);
  const newArrData = arrData.map(formatData).join("\n");

  return newArrData;
}

function formatData(lineData) {
  const dataArr = lineData.replace(/\r$/, "").split(",");
  const birthDate = new Date(dataArr[4] + " " + dataArr[5]);
  const options = { hour12: false };

  dataArr[5] = birthDate.toLocaleTimeString(
    `${dataArr[8]}-${dataArr[6]}`,
    options
  );
  dataArr[4] = birthDate.toLocaleDateString(`${dataArr[8]}-${dataArr[6]}`);
  const refDate = new Date("01 october 2025");
  refDate.toLocaleDateString(`${dataArr[8]}-${dataArr[6]}`);
  const age = getYearDifference(refDate, birthDate);
  // console.log("age: " + age);
  dataArr[dataArr.length] = age;
  const dataString = dataArr.join(",");
  return dataString;
}

function getYearDifference(date1, date2) {
  const year1 = date1.getFullYear();
  const year2 = date2.getFullYear();
  return Math.abs(year1 - year2).toString();
}

// [4] date
// [5] time
// [9] timezone

// [8] lang code
// [6] country code

// const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// // An application may want to use UTC and make that visible
// const options = { timeZone: "UTC+5", hour12: false };
// console.log(date.toLocaleTimeString("en-US", options));
// // "3:00:00 AM GMT"

// // Sometimes even the US needs 24-hour time
// console.log(date.toLocaleTimeString("en-US", { hour12: false }));
// // "19:00:00"

// // Show only hours and minutes, use options with the default locale - use an empty array
// console.log(
//   date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
// );
// // "20:01"
