//! 61 – JSON, ECMA 404

//* JSON: Javascript Object Notation

//* Data interchangeable format
//* JSON is most common data format
//* issued in 2001 by Douglas Crockford, Senior Javascript architect
//* Author of book: Javascript: the good parts

//* JSON has standard: ECMA 404

//* unified format for exchanging data between browser and server or between servers themselves
//* so data request or response to be in JSON format

//* JSON and YAML are most common data format

//* there are others:
//* protobuf, csv, xml (similar to html)

//* JSON syntax is similar to object literal
//* Properties names will be set in double quotations

//^ Example

//* It is usual to convert JSON data to object to interact with it
//* we use parse method for that

(function () {
  let json_data = `
    {
        "name" : "person name",
        "birth_year" : 2000,
        "id" : 101,
        "class" : {
            "id": 22,
            "name" : "math"
        }
    }
    `;

  //^ note:
  //* JSON Data type is string

  // console.log(typeof json_data); //* string
  let person = JSON.parse(json_data); //* object
  //   console.log(person);
})();

//? Parse Method:
//* Convert JSON data format to JS object

//? Use of JSON to apply deep copy object (old method):

(function () {
  let person = {
    name: "person name",
    birth_year: 2000,
    id: 101,
    class: { id: 22, name: "math" },
  };

  let json_data = JSON.stringify(person);
  let newPerson = JSON.parse(json_data);

  newPerson.class.name = "computer science";

  console.log(person); //* { name: 'person name', birth_year: 2000, id: 101, class: { id: 22, name: 'math' } }
  console.log(newPerson); //* { name: 'person name', birth_year: 2000, id: 101, class: { id: 22, name: 'computer science' } }
  //! Deep copy achieved
})();
