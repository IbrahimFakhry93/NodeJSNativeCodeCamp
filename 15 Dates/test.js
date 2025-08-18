let start_date = new Date("20 Feb 2024 17:03:42");
console.log(start_date); //* 2024-02-20T15:03:42.000Z

//* Local time string
console.log(start_date.toString()); //* Tue Feb 20 2024 17:03:42 GMT+0200 (Eastern European Standard Time)
//* Localized format
console.log(start_date.toLocaleString()); //* 20/02/2024, 5:03:42 PM

let start_date2 = new Date(2024, 1, 20, 17, 3, 42); //* in order of ISO, 1: February
// console.log(start_date2);

console.log("================");

start_date.setDate(25);
console.log(start_date); // Sun Feb 25 2024 17:03:42 GMT+0200 (Eastern European Standard Time)
start_date.setDate(30); // 30 Feb which is not existed so it will make it 30 Mar
console.log(start_date); // Fri Mar 01 2024 17:03:42 GMT+0200 (Eastern European Standard Time)
start_date.setDate(70); //
console.log(start_date); // Thu May 09 2024 17:03:42 GMT+0300 (Eastern European Summer Time)
console.log("================");

start_date.setDate(-1);
console.log(start_date); // 2024-04-29T14:03:42.000Z
