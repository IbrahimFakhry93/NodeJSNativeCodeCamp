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

//? watch the slides, important

//* in this lecture we will continue our talk about asynchronous programming in node js
//* and priority of callback execution

//* node js stack (main stack): region where code is executed according to the order of the code in the script
//* event loop region recieved any async code

//* when the code order comes to readFile async code
//* fs.readfile goes to main stack and a file request sent to event loop
//* event loop store the callback fnction (address of cb func in the memory)
//* then event loop sent file request to the operating system to read the file
//* the operating system who reads the file not node js

//^ note:
//* programming language requests the operating system to read the file
//* fs.readFile func: doesn't read the file, it requests to read the file by OS

//* node js will wait the callback in the vent loop before it closes the application

//* when the OS send the content of the file reading to event loop
//* event loop pass the stored callback function to the queues (widely used type of data structure)
//* queues is like sorted array and we can get only to the item which is first one in the queue (LIFO)
//* then callback function is sent at certain time to the main stack to be executed

//* node stack or main stack will be emptied and by this the code is finally executed

//? Event loop queues:

//* Event loop has number of queues depends on the type of operation

//* Six queues:
//* four queues in event loop
//* v8 queues in node js v8 engine

//~ nextTick queue:
//* any callback registered in nextTick will be stored in nextTick queues
//* if we have more than one nexttick cbs, they will be stored by the order of entering the queue

//~ promise

//~ Timer

//~ I/0
//* I/O is the core of event loop
//* I/O: fs, tcp, dns and more
//* I/O is category contains interacting with files and different connections

//~ Check

//~ Close

//? I don't understand this line according to the lecture
//* event loop goes around each queue makes it empty then goes to the next queue

//^ open: index2.js
