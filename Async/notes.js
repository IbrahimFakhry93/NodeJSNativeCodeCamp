//! 48 – Asynchronous – Event Loop – Callback – nextTick

//* Async: Request something at a specific point in time,
//* then receive the response later at another point.

//* Sync: Request something at a specific point in time and expect the response immediately.

//* JS by nature is synchronous
//* Asynchronous is possible in NODE JS by Libuv
//* Node JS uses Libuv not us

//* Libuv is a multi-platform support library focus on I/O Asynchronous

//* It takes care of polling for I/O and scheduling callbacks to be run based on different sources of events.

/*
Polling for I/O" is a technical way of saying that the program is constantly checking for input/output (I/O) activities to happen,
 like reading data from a file, getting a message over a network, or writing data to a device. 
 Think of it as the program keeping an eye on things and asking, 
"Is there any data ready for me to handle?" If there is, it processes it; 
if not, it continues checking without stopping.
*/

//* Rust programming and Web servers depend on Libuv

//* The event loop is the central part of libuv's functionality

//* Libuv creates event loop

//* most event loop needs to do its requests from the operating system
//* such as i/o operations

// I/O simply stands for input-output,

// which is basically stuff like accessing the file system

// and handling network requests.

// This is actually the whole reason why Node.js

// is completely designed around callbacks,

//* all operating systems provides system calls, by these calls we can ask the os to execute certain tasks

//* callback is very important in node js

//? idea of callback function:
//* prepare complete function, and ask other part of the code to call it
//* and this call is executed at certain time, when something happens

//* other part of this code can be line of code in our script
//* or other module is installed, this module receive the callback function
//* and when this module finishes something, it will call this callback function

//^ open: index.js
//^ open: ourMath.js

//* readFile function is asynchronous call

//*=============================================================================

//! 49 – Asynchronous – Event Loop Queues – Callbacks Priorities

//* in this lecture we will continue our talk about asynchronous programming in node js
//* and priority of callback execution
