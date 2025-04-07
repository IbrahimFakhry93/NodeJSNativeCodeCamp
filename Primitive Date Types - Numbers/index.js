//* Data is stored in computer generally as binary data

//? Primitives:

//* undefined
//* null
//* string
//* number
//* bigint
//* boolean
//* symbol

//*=====================================================

//* undefined and null are primitive values
//* undefined and null are similar with small differences
//* undefined and null are existed to express about non existent value

//? null
//* تعبر عن عدم وجود قيمة بشكل متعمد

//? undefined
//* قيمة افتراضية لو لسه محددناش نوع الداتا للمتغير

console.log(null == undefined); //! true
//* ==: compares values not data types, it makes type casting

console.log(null === undefined); //! false
//* strict equal, no type casting

//* undefined express case of the variable
//* null express the value of the variable

//* js is dynamic language or weak typed language

//~ to check the variable is empty or not:

if (x !== undefined && x !== null) {
  //* do something
}
