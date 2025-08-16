//* Scope

//* var is function scope means ,it is only become enclosed when it's decalrared inside function
//* but inside a block scope such as if or for loop, it's not enclosed, it's like oesn't see this block at all

//* function scope also is called local scope

//* let and const are block scope, means they are enclosed inside block scope of if or for loop or any non-function curly braces

//* hositing:

//* var, let and const all are hoisted to the top of the scope they are declared in
//* In case of access befor declaration

//* var gives undefined and doesn't throw an error

//* but let and const throw reference error can't access variable before initialization because of TDZ they are placed in

//* TDZ (temporary dead zone) avoid and prevents accessing variable before declaration because it's a bad practice
//* it prevents the developer by doing so by notifing him by throwing an error when he didd that, if he used let and const for variable decalration

//* that's why is recmmended to use let and const instead of var

///* scope chian is one way street, inside child or inner scope you can access the parent outer scope not vice versa

//* sibling scopes has no access to each other (example

//* outer scope has no access at all to the vvariables declaraed in ichildren or inner scope

//* exept if var inside block scope, block scope, it's like not existed for var case
