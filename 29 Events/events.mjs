//! 63 – EventEmitter
//*  An EventEmitter lets you register callbacks (listeners) for named events.
//*  When an event is emitted, all its registered listeners are called in order.
//*  Events can carry data, which is passed as arguments to the listeners.
//*  The EventEmitter class is in Node.js's built-in 'events' module.
//*  You must create an instance of EventEmitter to use it.
//*  Listener return values are ignored — they should perform actions, not return data.
//*  You can register multiple events on the same EventEmitter instance,
//*  and each event can have multiple listeners.

import { EventEmitter } from "events";

//~ Create an EventEmitter instance
const emitter = new EventEmitter();

//~ Example listeners
function eventHandler() {
  console.log("hello");
}
function anotherListener() {
  console.log("another hello");
}

//~ Register three listeners for the same event ("hi")
emitter.on("hi", eventHandler);
emitter.on("hi", anotherListener);
emitter.on("hi", () => console.log("third hello"));

//~ Emit (call) the "hi" event — all three listeners run synchronously
emitter.emit("hi");

//~ Register a one-time listener for "hi"
emitter.once("hi", () => console.log("hi is emitted for the first time."));

//~ Emit a different event ("bye") — no listeners yet
emitter.emit("bye");

//~ Useful EventEmitter methods
console.log(emitter.eventNames()); //* Array of registered event names
console.log(emitter.listenerCount("hi")); //* Number of listeners for "hi"

//? prependListener vs on:
//* - on() adds the listener to the end of the listeners array (like push)
//* - prependListener() adds it to the start (like unshift)
emitter.prependListener("bye", () => console.log("bye bye bye"));

//* Also available: prependOnceListener() — runs once, but at the start of the list
