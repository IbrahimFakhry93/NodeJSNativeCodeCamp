//! Luxon Module

import { DateTime, Interval } from "luxon";
let now = DateTime.now();
console.log(now.toString()); //* full date and time in IS0
console.log(now.toISO()); //* same toString
console.log(now.toISODate()); //* date only
console.log(now.toISOTime()); //* time only

console.log(now.toLocaleString());

console.log(now.year);
console.log(now.month); //* jan will be 1 , not zero index as in js
console.log(now.day);
console.log(now.zoneName);
console.log("===========================================");
//? set function
now = now.set({ year: 2030 });
now = now.set({ month: 12 });
console.log(now.toISO());
console.log("===========================================");
//? calculation operations on dates

now = now.plus({ months: 1 });
now = now.plus({ months: 13 });
now = now.plus({ hours: 1 });
now = now.plus({ minutes: 1 });

let end = DateTime.fromISO("2024-05-14T11:10:10.000");
let start = DateTime.fromISO("2024-04-14T10:10:10.000");

let diff = end.diff(start);
console.log(diff.as("months"));
console.log(diff.as("days"));

let interval = Interval.fromDateTimes(start, end);
console.log(interval.length("months"));
console.log(interval.length("days"));
console.log("===========================================");
//? compare two dates:

console.log(start.toMillis());
console.log(end.toMillis());
console.log(start.toMillis() === end.toMillis());

console.log(start.hasSame(end, "year"));
console.log(start.hasSame(end, "month"));
console.log("===========================================");
//? if you done that in js as following you don't need libraries as Luxon:

let d = new Date();
console.log(d.toISOString().replace("T", " ").replace("Z", ""));
