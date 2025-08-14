//! 35 – V8 engine

//* V8 Engine executes JS code in browser or in node js

//* V8 is Google’s open‑source JavaScript engine, written in C++.
//* It’s responsible for parsing, compiling, and executing JavaScript code.
//* It uses Just‑In‑Time (JIT) compilation to turn JS into machine code so it runs fast.

//~ V8 parts
//? parser
//* parser do this:
//* high level code -> lexical analysis (convert code into tokens) -> syntax analysis (check if tokens combine correct syntax statements) -> type analysiis (check dat atype)

//* parser converts the code into Abstract Syntax Tree (AST)

//? Interpreter (Ignition):
//* converts AST to bytecode (intermediate representation)

//* After bytecode there are two paths
//? Optimized Compiler (TurboFan)
//* convert byteCode into optimized machine code
//* optimization for functions in the code
//* for ex: function is being called more than one time so it needs optimization

//? Baseline Compiler (Sparkplug)

//* compilation occurs only when the application starts up like a webpage opened on a browser,
//* as long as it's opened o the browser, the compilation occurred only one time

//^ note:
//* in Java and .net compilation and interpreting happens on two different stages
//* while in js, compilation and interpreting happens on one single stage

//* v8 engine changes over time
