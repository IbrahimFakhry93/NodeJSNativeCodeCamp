//! 46 – Hands-on Exercise 02 – forEach – Ternary Operator

//* csv: comma separated values

/*
assumptions:
- csv file contains data for persons
- birth date in the csv file formated as MM/DD/YYYY
- birth time formated as 12 hour (am, pm)

Task requirements:
- change the birth date format to match the person country format (as possible)
- calculate the age of the person in 1st October 2025
- add the calculated age to the person data
- create a paragraph from the formatted data
- save new data in a new file

*/

// you will not copy the code .. you will write it yourself. character by character.

/*
1,male,Tawnya Grimwood,tgrimwood0@123-reg.co.uk,01/24/1981,04:15 AM,UZ,Uzbekistan,uz,UTC+5
2,male,Dylan Haugen,dhaugen1@surveymonkey.com,10/19/1984,05:59 AM,MA,Morocco,en,UTC+1

[4] date
[5] time
[9] timezone

[8] lang code
[6] country code

[7] country name
[2] full name
[3] email
[1] gender
[0] id

*/

/*
required output paragraph:

" id - name is born in country on local_datetime
his/her age in october 2025 will be almost diff years
his/her contact information: email

"

*/

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

import { DateTime, Interval } from "luxon";
import * as fs from "fs";

let data = fs.readFileSync("./MOCK_DATA.csv", { encoding: "utf8", flag: "r" });

// console.log(data);

let data_array = data.split("\n");
// console.log(data_array);

let new_data = ""; //* variable that i will store on later, append the data on it

data_array.forEach((line) => {
  let ln = line.split(",");
  //   console.log(ln);
  //* 01/24/1981,04:15 AM
  //* 01/24/1981 === MM/DD/YYYY
  //* t === 04:15 AM
  let birthdate = DateTime.fromFormat(`${ln[4]} ${ln[5]}`, "MM/dd/yyyy t", {
    zone: ln[9].replace("\r", ""),
  });
  //   console.log(birthdate.toISO());

  let local_birthDate = birthdate
    .setLocale(`${ln[8]}-${ln[6]}`)
    .toLocaleString(DateTime.DATETIME_FULL);
  console.log(local_birthDate);

  //* DateTime depends in localization on Intl (something in JS related to localization)

  //? Age Calculation:

  let refDate = DateTime.fromFormat(
    "2025-10-01 00:00:00",
    "yyyy-MM-dd hh:mm:ss",
    { zone: ln[9] }
  ); //* adjust refDate on time zone of the user
  console.log(refDate);

  let age = refDate.diff(birthdate, "year");

  let gender = ln[1] === "male" ? "his" : "her";
  //? Paragraph
  console.log("==========================");
  let temp = ` ${ln[0]} -${ln[2]} is born in ${ln[7]} on ${local_birthDate}
${gender} age in october 2025 will be almost ${age} years
his/her contact information: ${ln[3]}
------------------------------------------------
`;
  new_data += temp;
});

//? Write File

try {
  fs.writeFileSync("./newData.txt", new_data, { encoding: "utf8" });
} catch (e) {
  console.log(e);
}
