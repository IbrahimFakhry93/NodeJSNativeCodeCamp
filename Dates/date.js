//~ Date Declaration:

const d = new Date(); //*
console.log(d); //* Sat Apr 12 2025 18:12:21 GMT+0200 (Eastern European Standard Time)  , fixed snapshot of the time of thils line code when it ran, it won't change with time
console.log(d * 1); //*  1744474385133 Epoch value in ms
console.log(d.toISOString());

// setInterval(() => {
//   console.log(d);
// }, 3000);

const d1 = Date.now(); //* use date object wothout instance because .now() is a static method, returns date as epoch direct, returns Number data type
console.log(d1); //* 1744474743350

let start_date = new Date("20 Feb 2024 17:03:42");
// console.log(start_date); // Tue Feb 20 2024 17:03:42 GMT+0200 (Eastern European Standard Time)
// console.log(start_date.getDate()); //* return the day only: 20  , local
// console.log(start_date.getUTCDate()); //* return the day only: 20, utc

start_date.setDate(25);
//console.log(start_date); // Sun Feb 25 2024 17:03:42 GMT+0200 (Eastern European Standard Time)
start_date.setDate(30); // 30 Feb which is not existed so it will make it 30 Mar
//console.log(start_date); // Fri Mar 01 2024 17:03:42 GMT+0200 (Eastern European Standard Time)
start_date.setDate(70); //
//console.log(start_date); // Thu May 09 2024 17:03:42 GMT+0300 (Eastern European Summer Time)

// comment above to see the correct result
start_date.setDate(-1); // remove the rest of May and subtract one day of April
console.log(start_date); // Mon Apr 29 2024 17:03:42 GMT+0300 (Eastern European Summer Time)

console.log(start_date.getDay()); // 1: Mon , getDay( ) returns the order of the day in the weekend, JS start the week from Sun which is 0

let start_dat2e = new Date("20 Feb 2024 17:03:42Z"); //* add Z to "20 Feb 2024 17:03:42
// console.log(start_dat2e);
// Tue Feb 20 2024 19:03:42 GMT+0200 (Eastern European Standard Time)

let start_date2 = new Date(2024, 1, 20, 17, 3, 42); //* in order of ISO, 1: February
// console.log(start_date2);

//*============================================================
console.log("======== date =====================");

let date = new Date("20 Feb 2024 01:03:42");
console.log(date.getDate()); // 20
console.log(date.getUTCDate()); // 19 because utc will subtract two days of 29 Apr

console.log(date.getTime()); //* Epoch in ms from 1970
console.log(date.getFullYear()); //* 2024

let date2 = new Date("12 02 2024 01:03:42"); //* 12 here is Month because this format we didn't write the month name as aove
console.log(date2); //* Mon Dec 02 2024 01:03:42 GMT+0200 (Eastern European Standard Time)

let date3 = new Date(" Hello the date is : 12 02 2024 01:03:42"); // the date is extracted from the text

console.log(date3); // Mon Dec 02 2024 01:03:42 GMT+0200 (Eastern European Standard Time)
//*============================================================
