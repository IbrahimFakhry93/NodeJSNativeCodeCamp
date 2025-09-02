//! 43 – Dates – Unix Epoch – ISO 8601
//* Date in JS is object

//* Date object stores date information in (Number) property
//* Date is in general is a number, manipulated by some functions

//* The source code for date is complicated
//* There are 2000 lines of code for date in V8 engine beside the auxiliary objects
//* There are also source code for date in the operating system

//? Unix Epoch
//* To understand how JS interacts with dates, we need to know at first what is Unix Epoch,

//* Unix Epoch is a system to represent a certain date

//* Unix Epoch value represents date info in a number which is count of seconds elapsed since 1 Jan 1970 24:00:00 (12 pm (midnight) on 1 Jan 1970)

//* Unix is a name of a famous operating system which is developed in sixties in Bell Labs Company

//* Entire day in Unix Epoch  = 24 h * 60 m * 60 s
//* Entire day in JavaScript  = 24 h * 60 m * 60 s * 1000ms

//~ One day after Jan 1, 1970

let start_date = new Date("1970-01-02"); //* 1970-01-02T00:00:00.000Z  (this date is in ISO Format)
// This is exactly 1 day after the UNIX epoch start (Jan 1st, 1970 UTC).

//^ to get the epoch value: (multiply * 1)
console.log(start_date * 1); // 86400000: milliseconds since the UNIX epoch.

//* Multiplication forces numeric type coercion.
//* For Dates, numeric coercion calls .valueOf(), not .toString().
//* Therefore date * 1, +date, or Number(date) all give you the timestamp in ms since epoch.

//^ note:
//* .valueOf(): Extract the primitive value from the Number object

//^ note on Epoch value:
//* Epoch value is different on apple os, it's 1/1/2001

//? Current DATE and Time:
let now2 = new Date();
//* creates a Date object holding the current date and time.
//* The operating system obtains this time from the hardware clock in the computer’s CPU (or motherboard),
//* and regularly synchronizes it with network time servers.
//* These servers are often provided by the OS vendor —
//* for example, Microsoft has its own time servers for Windows,
//* and Apple has its own for macOS
//* though users and organizations can configure different time sources.

//? ISO 8601
//* Standard for time and date formatting
//^ lookup: 6.jpg
//^ lookup: 7.jpg to get the leap year rule

//^ lookup: 8.jpg to get the ISO 8601 format for date and time
//* calendar day: the day relative to the year

//? ISO 8601 Designators
//* T: time start
//* +02: utc+2
//* Z: utc 0

//& Title: ISO 8601 Date and Time Format

//? Basic Date Format
//* Pattern: YYYY-MM-DD
//* YYYY = 4-digit year
//* MM   = 2-digit month (01–12)
//* DD   = 2-digit day (01–31)
//* Example: 2025-08-19 → 19th August 2025

//? Date + Time Format
//* Pattern: YYYY-MM-DDTHH:MM:SSZ
//* T  separates date and time
//* HH:MM:SS = 24-hour time
//* Z  indicates UTC ("Zulu" time)
//* Example: 2025-08-19T18:38:00Z → 19 Aug 2025, 18:38 UTC

//? Time Zone Offsets
//* Instead of Z, can use ±HH:MM to indicate offset
//* Example: 2025-08-19T18:38:00+02:00 → UTC+2 (6:38 PM local time)

//? Notes
//* ISO 8601 avoids ambiguity in international contexts
//* Leading zeros required for months, days, hours, minutes, seconds
//* Widely used in APIs, databases, and timestamps

//^============================================
//^ UNIX Epoch: ask chatgpt

//& Title: UNIX Time / UNIX Epoch – Quick Reference for Backend & Interviews

//? Definition
//* The UNIX Epoch is the "zero point" in UNIX timekeeping: 00:00:00 UTC, 1 Jan 1970.
//* Time is stored/represented as a continuous count of seconds elapsed since this moment.
//* Widely used in OS clocks, file timestamps, databases, APIs, and backend systems.
//? Two main unit variants exist:
//*   - Seconds → integer count (most APIs, POSIX systems).
//*   - Milliseconds → seconds × 1000 (JavaScript Date uses this internally).
//* Leap seconds are ignored — UNIX time assumes a simple continuous count without adjustments.
//* Reason for 1970: simplicity during UNIX's creation; aligned with the start of the decade.

//? Core Conversions in JavaScript
//* NOTE: JavaScript's Date object internally uses milliseconds since the epoch.
const nowSec = Math.floor(Date.now() / 1000);
//* Current time in UNIX seconds: divide ms by 1000 and floor to remove fractional part.

const epochStart = new Date(0);
//* Date(0) → "Thu, 01 Jan 1970 00:00:00 GMT" in UTC, the epoch start point.
console.log(epochStart.toUTCString());

//* Converting Date → UNIX seconds:
const unixFromDate = Math.floor(new Date().getTime() / 1000);

//* Converting UNIX seconds → Date:
const dateFromUnix = new Date(1700000000); // example value

//* Converting Date → UNIX milliseconds:
const unixMsFromDate = new Date().getTime();

//* Converting UNIX milliseconds → Date:
const dateFromUnixMs = new Date(1700000000000);

//? Time Zone Adjustments
//* UNIX time is always UTC. To display local time, apply your local offset.
//* UTC → Local: Just create a Date object and call .toString().
const localTime = new Date(nowSec * 1000).toString();

//* Local → UTC: You'd adjust by subtracting your local timezone offset if manually calculating.
//* Best practice: store timestamps in UTC, adjust to local time only when displaying to users.

//? Common Pitfalls
//* 1. Leap seconds are ignored: small drift possible between real clock and UNIX time.
//* 2. JavaScript Dates use milliseconds, so always divide/multiply when switching to/from seconds.
//* 3. Time zone parsing issues: strings without 'Z' or explicit offset are interpreted as local time.

//? Quick Practice Snippets
//* Current UNIX seconds:
console.log(Math.floor(Date.now() / 1000));

//* Convert UNIX seconds to human-readable UTC:
console.log(new Date(nowSec * 1000).toUTCString());

//* Shift by +3 hours (e.g., EEST offset):
const shifted3h = new Date((nowSec + 3 * 3600) * 1000);
console.log(shifted3h.toUTCString());

//*========================================================
//! 44 – Dates – JavaScript Date Object

//^ note:
//* Date object is about to end.
//* Meet the long-awaited (Temporal) — designed to make time zone handling
//* explicit and predictable, so you don’t run into “why did it change?” surprises.

//^ note:
//* During work, we don't rely on Date built-in object

//^ but in this lecture, we will study the date object although it's about to end

(function () {
  const d = new Date();
  console.log(d); //* it's just a snapshot of current date and time
  console.log(d * 1); //* to get Epoch value in ms
  //* use setInterval to keep logging the exact current date and time
  //   setInterval(() => {
  //     console.log(d);
  //   }, 3000);

  //? to get Epoch value in ms direct
  //* we use the static method: .now()

  const d1 = Date.now();
  console.log(d1);

  //^============

  let start_date = new Date("20 FEB 2024 17:03:42");
  console.log(start_date); //* 2024-02-20T15:03:42.000Z

  //* Local time string
  console.log(start_date.toString()); //* Tue Feb 20 2024 17:03:42 GMT+0200 (Eastern European Standard Time)
  //* Localized format
  console.log(start_date.toLocaleString()); //* 20/02/2024, 5:03:42 PM

  //^============

  //? Extract the date from a string
  //* the engine scans the string, skips over the irrelevant text at the start,
  //* and locks onto the first valid date/time pattern it recognizes (01 Jan 2000 08:00)

  const dString = new Date(
    "Ignore all of this stuff because it is annoying 01 Jan 2000 08:00"
  );
  console.log(dString);

  //^============

  //? rare way to create date instance by passing this: 2024, 1, 20, 17, 3, 42
  let start_date2 = new Date(2024, 1, 20, 17, 3, 42); //* in order of ISO, 1: February
  // console.log(start_date2);  //* 2024-02-20T15:03:42.000Z

  let start_date22 = new Date("20 FEB 2024 01:03:42");
  //* getDate() will get the day
  console.log(start_date22.getDate()); // 20   : getDate for local
  console.log(start_date22.getUTCDate()); // 19 : getUTCDate for utc, timezone zero, because of hour 01:03:42 on 20 Feb

  start_date.setDate(25); //* 2024-02-25T15:03:42.000Z

  start_date.setDate(30); //* 2024-03-01T15:03:42.000Z

  start_date.setDate(70); //* 2024-05-09T14:03:42.000Z

  console.log("================");

  start_date.setDate(-1);
  console.log(start_date); // 2024-04-29T14:03:42.000Z

  //*===================

  console.log(start_date.getDay()); // 1: Mon , getDay( ) returns the order of the day in the weekend, JS start the week from Sun which is 0

  let start_dat2e = new Date("20 Feb 2024 17:03:42Z"); //* add Z to "20 Feb 2024 17:03:42
  // console.log(start_dat2e);
  // Tue Feb 20 2024 19:03:42 GMT+0200 (Eastern European Standard Time)

  let start_date3 = new Date(2024, 1, 20, 17, 3, 42); //* in order of ISO, 1: February
  // console.log(start_date3);

  //*============================================================
  console.log("======== date =====================");

  let date = new Date("20 Feb 2024 01:03:42");
  console.log(date.getDate()); //* 2
  console.log(date.getUTCDate()); //* 1

  console.log(date.getTime()); //* Epoch in ms from 1970
  console.log(date.getFullYear()); //* 2024

  let date2 = new Date("12 02 2024 01:03:42"); //* 12 here is Month because this format we didn't write the month name as above
  console.log(date2); //* Mon Dec 02 2024 01:03:42 GMT+0200 (Eastern European Standard Time)

  let date3 = new Date(" Hello the date is : 12 02 2024 01:03:42"); // the date is extracted from the text

  console.log(date3); // Mon Dec 02 2024 01:03:42 GMT+0200 (Eastern European Standard Time)
  //*============================================================
})();

(function () {
  //? Different ways to create Date objects or parse dates in JavaScript:

  //* Create a Date from a human‑readable string (parsed as LOCAL time by default):
  const d = new Date("20 Feb 2024 17:03:42");
  //^ note: date object as above, it internally calls Date.parse

  //* Parse an ISO‑like date string with explicit UTC offset (+02 here):
  //^ note: Date.parse: receives ISO 8601 Format
  const d_parse = Date.parse("2024-02-20 17:03:42+02");
  //* NOTE: Date.parse() returns a timestamp (Epoch) in milliseconds, not a Date object.

  //* Parse a human‑readable date string (implementation‑dependent parsing):
  const d_parse2 = Date.parse("20 Feb 2024 17:03:42");

  //* Attempt to parse a numeric DD MM YYYY format – fails (NaN) because it's not recognized:
  const d_parse3 = Date.parse("20 02 2024 17:03:42"); // NaN

  //* because JavaScript’s Date parser considers 20 as a month and there is month is 20

  //& Title: Date String Parsing Pitfall – Non‑ISO Format

  const dd = new Date("12 02 2024 17:03:42"); //* it considers first number as month
  //* Parsed as Dec 02 2024, 17:03:42 LOCAL time (MM DD YYYY assumption).
  //* Non‑ISO, ambiguous format → engines guess month/day order.
  //* Always stored internally as UTC ms since epoch.
  //* toString() shows local time; toISOString() shows UTC (with 'Z').

  console.log(dd.toString()); //* Local time display
  console.log(dd.toISOString()); //* UTC display

  //? Best Practice – Use ISO or explicit components:
  const d1 = new Date("2024-02-12T17:03:42"); //* ISO local
  const d2 = new Date("2024-02-12T17:03:42+02:00"); //* ISO with TZ (timezone)offset
  const d3 = new Date(2024, 1, 12, 17, 3, 42); //* Explicit args (month 0‑based)
})();

//* elapsed Epoch == timestamp
//* use timestamp better as an expression

//*==============================================================

//! 45 – Dates – Luxon module

//* Luxon is a replacement of Date built-in object in JS
//* Luxon provides more logic methods than JS Date object especially regarding formatting and timezone

//* Luxon was before called moment.js

//* open terminal on folder Lec45-Lux
//* npm init to get package.json file
//* npm install luxon
//* open package.json and add: "type": "module" because we will use luxon module as esm

//~ esm method
import { DateTime, Interval } from "luxon";

//? Formatting functions
let now = DateTime.now();
console.log(now.toString()); //* full date and time in IS0 format
console.log(now.toISO()); //* same as toString
console.log(now.toISODate()); //* logs date only
console.log(now.toISOTime()); //* logs time only

console.log(now.toLocaleString());
console.log(now.toLocaleString(DateTime.DATETIME_HUGE_WITH_SECONDS));
console.log(now.toLocaleString(DateTime.DATETIME_MED_WITH_WEEKDAY));
console.log(now.toLocaleString(DateTime.TIME_WITH_SECONDS));

console.log(now.year);
console.log(now.month); //* jan will be 1 , not zero index as in js
console.log(now.day);
console.log(now.zoneName);

//* Check luxon documentation or moment github

//? set function
now = now.set({ year: 2030 });
now = now.set({ month: 12 });
now = now.set({ day: 29 });
console.log(now.toISO()); //* to log full date and time in IS0 format, recall: toISO == toString

//? calculation operations on dates

now = now.plus({ months: 1 }); //* add one month to the date
now = now.plus({ months: 13 });
now = now.plus({ hours: 1 });
now = now.plus({ minutes: 1 });

//? Difference between two dates
let start = DateTime.fromISO("2024-02-21T10:10:10.000");
let end = DateTime.fromISO("2024-05-14T10:10:10.000"); //* 000: are the ms and they are placed after . not :

let diff = end.diff(start); //* end - start
console.log(diff); //* logs an object: diff is an object which called duration
console.log(diff.as("months")); //* difference as months
console.log(diff.as("days")); //* difference as days

console.log(start.toISO()); //* start: 2024-02-21T10:10:10.000+02:00
console.log(end.toISO()); //* end: 2024-05-14T10:10:10.000+03:00

//! why start is plus 2 while end is plus 3?
//* Because of Daylight saving time  (التوقيت الصيفي)
//* In May, Egypt observes daylight saving time (summer time) by advancing clocks one hour.
//* Luxon knows about that so it adds +3 as above

//^ open: luxon source code on github -> open: duration.js

let interval = Interval.fromDateTimes(start, end);
console.log(interval.length("months"));
console.log(interval.length("days"));

//? compare two dates:

console.log(start.toMillis());
console.log(end.toMillis());
console.log(start.toMillis() === end.toMillis());

console.log(start.hasSame(end, "year")); //* has same year, as start in 2024 and end also in 2024
console.log(start.hasSame(end, "month"));

console.log(start.hasSame(end, "hour")); //* false, because all the previous units months and days are not the same as example above
//* hasSame to give you true, all units previously must be the same

//^====================================

//? By doing this in plain JavaScript, you can format a date/time string
//* similar to what date/time libraries (e.g., Luxon) produce, without
//* actually importing any extra library.
//
//* toISOString() → gives "YYYY-MM-DDTHH:mm:ss.sssZ" in UTC.
//* replace("T", " ") → swaps the 'T' separator for a space.
//* replace("Z", "")  → removes the trailing 'Z' (UTC indicator).
//
//* Result: "YYYY-MM-DD HH:mm:ss.sss" in UTC, as a simple string.

let d = new Date();
console.log(d.toISOString().replace("T", " ").replace("Z", ""));

//* Instead of using Luxon’s toFormat() or similar to get a clean YYYY-MM-DD HH:mm:ss.sss string,
//* this one‑liner uses built‑in JS methods
//* to get the same style of output
//* (UTC time, ISO order, with a space instead of T and no timezone letter).

//*========================================================
