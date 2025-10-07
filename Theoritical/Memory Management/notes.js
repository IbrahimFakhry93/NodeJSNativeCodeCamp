//! 53 – Memory Management – Stack and Heap

//^ note:
//* Watch Data & Memory, DataTypes & Memory

//* V8 Engine is a program is built with C++ compiler

//* Memory management by V8 engine

//* stack introduced by ALGOL programming lang in fifties (ALGOL depends on stack architecture)
//* Heap introduced by BCPL in sixties

//* C is inherited from BCPL

//* C is benchmark of other prog languages

//? Code segment or Memory Layout:

//* Memory division for each part of code it's called code segment or memory layout

//* form of code segment or memory layout is varied from prog lang to another

//* In stack we store directly data (such as variables) or pointer (of strings, functions, objects) referred to a data existed in heap

//* Data which is by default is stored in stack or heap is varied from prog lang to another

//? Memory usage

//* C lang and its families classifies data types into static types and dynamic types

//* Dynamic types are stored in heap, Static types are stored in stack, address of dynamic types are stored in stack too

//? static vs dynamic with respect to variables:

//~ For C:
//* we have to do compiling for the code and get executable file at least once
//* then run this file infinity number of times

//^ during compiling time:
//*  compiler knows the size of static data types
//^ during runtime:
//* but compiler knows the size of dynamic data types only during runtime

//? V8 and memory usage:
//* in V8 engine, all data types are stored in heap
//* some small integers are stored in stack
//* even if there is a very small float number is stored in heap

//* Javascript doesn't deal with the memory
//* there are no memory management in js standard(ecma script)

//* so the Javascript engine (ex. V8) is the one who deals with the memory
//* memory management is different among different js engine

//? Memory allocations:
//?  تخصيص الذاكرة وتقسيمها

//* V8 request memory from OS
//* OS is completely in control of the computer memory
//* OS in collaboration with CPU's MMU (Memory Management Unit) allocate block of the memory for V8
//* OS responds to V8 with virtual memory addresses not the physical address that the OS requests (allocates) from the memory

//* any program on modern computer works with the concept of virtual memory
//* You will know more about virtual memory when you study about operating system

//* V8 creates memory format (memory division) for this allocated block of the memory
//* in the following session you will know about this memory division (memory format)

//*============================================================================

//~ Chatgpt

//& V8 and Memory Usage

//? JavaScript Value Representation in V8
//* In V8, JavaScript values are managed using a tagging system.
//* Most objects (arrays, strings, objects, etc.) are allocated in the heap.
//* However, small integers, known as SMIs (Small Integers), are encoded directly into pointer values.
//* SMIs do not require separate heap allocation; they are stored "immediately" within the variable's representation
//* (often in registers or on the stack if used as local variables).

//? Handling of Numbers
//* All JavaScript numbers are, by default, 64-bit floating point values.
//* When a number is a small integer (and fits within the SMI range), V8 represents it as an SMI.
//* If a number is not representable as an SMI (for example, if it is a floating-point value, even a small one),
//* then it is stored as a HeapNumber in the heap.

//? Clarification of the Original Comments
//* The statement "in V8 engine, all data types are stored in heap" is an oversimplification.
//* While most objects and non-SMI numbers are indeed on the heap,
//* SMIs are stored in a more efficient inline (immediate) format.
//* Similarly, the claim "some small integers are stored in stack" is misleading –
//* small integers (SMIs) are embedded in the pointer itself rather than being stored as distinct heap objects.
//* Local variables (including SMIs) may reside in registers or on the stack during function execution,
//* but their representation differs from heap-allocated objects.

//* Tagged Values:
//* V8 uses tagged pointers to differentiate between immediate values (like SMIs) and pointers to heap objects, providing efficient type checking and memory management.

//? Stack vs. Heap:
//* Remember that the call stack holds function call frames (local variables, return addresses, etc.),
//* whereas most complex data structures and objects reside in the heap.

// Optimizations: The SMI optimization is a key performance feature in V8, reducing the overhead of memory allocation for common integer values.

//*====================================================================================================================

//! 54 – Memory Management – V8 Resident Set

//* There is no ECMAScript Specifications to define the form of the memory layout
//* and which data type to be stored in heap or stack. Every Javascript Engine has the freedom to do so

//* V8 Engine core changed along time

//* We will discuss the memory management by V8 from higher level prospective
//* the memory management by V8 changes from version to another

//* V8 engine to run any JS code, it allocates a block of memory for this JS code (memory layout)
//* this allocated block memory is called resident set
//* V8 divide this resident set into stack and heap

//* V8 divides heap into 7 main regions (not standard, can be changed)
//* we will discuss only four main regions

//? 1) code space:
//* the JS code is stored in this space in heap
//* this space has special treatment and it is called executable memory
//* And it is protected from writing and identified for the CPU that it contains code instructions not values

//? 2) New Space (young generation):
//* All declared data (variables) stored in new space
//* new space is divided into two regions : semi space, semi space

//? 3) old space (old generation)
//* old pointer space
//^ for ex: object contain string property which will be pointer to the object string property which will be stored in heap
//^ watch the video of the lecture from 07:41
//* old data space

//? 4) Large object space:
//* store object > 600 kb

//^ example:

let person = {
  birth_year: 2000,
  name: "ahmed",
};

//^ watch video 07:41
//* person object value will be stored in heap and has an address and a pointer of this address will be stored in the stack

//* name the object property is a string, which will be stored in heap and has a pointer will be stored in the object place in the heap

//* the data stored in the memory are stored as values and memory address
//* they are not stored by their names

//*====================================================================================================================

//! 55 – Memory Management – V8 Garbage Collector

//* All programming languages are responsible for heap and stack memory divisions
//* some programming languages allow of memory allocating and deallocating

//* C doesn't automatically deallocate data in heap (garbage collection or clean up)
//* there is no garbage collector in c and rust
//* garbage unreferenced data or object, unused data anymore
//* جارباج معناها: داتا لم تعد مستخدمة

//? Automatic memory management languages
//* such as: Java, golang, js, c#

//* Garbage collector to work has to pause (in ms) the application
//* Garbage is a program too, so it consumes cpu memory

//* to deal with os we use low level language
//* to deal with business we use high level language

//^ example of C code to manage memory:

// malloc(), realloc() and free() manage memory spaces in the Heap

char * text;

// Allocate memory space for text variable. Length is 200 characters.
text = malloc(200 * sizeof(char));
//~ malloc: memory allocation

// Change the allocated memory to hold 300 characters.
text = realloc(text, 300 * sizeof(char));
//~ realloc: memory reallocation
// Remove the allocated memory.
free(text);

// store variable in specific memory address:

//~ int *address = (int *)(0x00000f20);
address = 1250;

//* garbage collector has different algorithms based on the programming language

//* V8 garbage collector component is Orinoco
//* Orinoco is divided into Minor GC (work on new space) and Major GC (work on old space)

let arr = [1, 2, 4];
console.log(arr);
arr = 3;
console.log(arr);

(function () {
  // When you execute:
  let arr = [1, 2, 4];
  // 1. A new array object [1, 2, 4] is created in the heap memory.
  // 2. The variable 'arr', which resides on the stack, stores a reference (a pointer) to this array object.
  console.log(arr); // Output: [1, 2, 4]

  // When you then execute:
  arr = 3;
  // 1. A new primitive value 3 is created.
  // 2. The variable 'arr' is reassigned to hold the primitive value 3.
  // 3. The original array [1, 2, 4] becomes unreferenced (if no other reference exists) and is eligible for garbage collection.
  console.log(arr); // Output: 3
})();
