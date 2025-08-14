//* if statement

//! Metwally Course

//! Lec 56

//* switch statement is somehow similar to if else

switch (expression) {
  case expression_value1: // case clause
    code_statement; // any number of lines of code
    break;
  case expression_value2:
    code_statement;
    break;
  case expression_value3:
    code_statement;
    break;
  default:
    code_statement;
}

//* expression produces value, such as comparison operator return boolean value or function call which returns value

//* if expression equals one of the expression values, code statement beneath will be executed
//~ comparison here is based on strict equal (===)
//~ compare both value and type
//* if not, code statement beneath default will be executed

//? without break keyword:
//* fall through will take place

//^ note:
//* the body of the switch statement is one scope

//^ note:
//* it is possible to have more than case clause have same code statement

//^ Example:
//^ run the code on index.js

function random_num() {
  let value = Math.ceil(Math.random() * 9); //* any value from 1 to 9, if Math.floor() it will be from 0 to 9
  console.log(value);
  return value;
}

switch (random_num()) {
  case 1:
  case 2:
  case 3:
    console.log("low");
    let new_num = Math.ceil(Math.random() * 90); //* any code for demonstration
    break;
  case 4:
  case 5:
    console.log("medium");
    //let new_num= Math.ceil(Math.random() * 90); //! error (new_num already declared)
    break;
  default:
    console.log("more than enough");
}

//*=============================================================================================

//! Jonas Course

//& Title: Demonstrating the Usage of switch in JavaScript

//? Note:

//* The switch statement compares one variable's value to different options.
//* It's used to perform different actions based on different conditions.
//* It is a more concise and readable alternative to using multiple if/else if statements.

//* The switch statement in JavaScript compares the value of the expression with the values of each case using strict equality (===).
//* This means that the types must also match for the comparison to return true.
//* As a result, it is not possible to use comparison or inequality operators directly within the switch statement.
//* means can not compare the switch value (switch (value)) to case value

//* break statement is used to exit the switch block and prevent the execution of any subsequent cases.
//* If no match is found, the code block of default case is executed (i.e., "Unknown fruit").

let fruit = "banana";

switch (fruit) {
  case "apple":
    console.log("Apple");
    break;
  case "banana":
    console.log("Banana");
    break;
  case "orange":
    console.log("Orange");
    break;
  default:
    console.log("Unknown fruit");
}
//* Output: Banana

//*==================================================================================================================

//! Route CS course

//& By Using Switch Case :
//* Write a program that allows the user to insert 2 integers then print the max

//* Example 1 :
//* Input 7 10
//* Output 10 is Maximum number

const numero1 = Number(prompt("Enter First Number"));
const numero2 = Number(prompt("Enter Second Number"));

switch (numero1 > numero2) {
  case true:
    console.log(`numero1 is max`);
    break;
  case false:
    console.log(`numero2 is max`);
    break;
}

//* In this example, the switch statement is used in a different way.
//* Instead of providing a value to compare against the case values,
//* the expression numero1 > numero2 is used.
//* This expression returns a boolean value (true or false) depending on whether numero1 is greater than numero2.
//* The case values in the switch statement are also boolean values (true and false).
//* When the expression numero1 > numero2 returns true, the first case is executed and 'numero1 is max' is logged to the console.
//* When the expression returns false, the second case is executed and 'numero2 is max' is logged to the console.
//* So, in this example, the switch statement is used to branch the code based on the result of a boolean expression,
//* rather than comparing a value against multiple case values.
