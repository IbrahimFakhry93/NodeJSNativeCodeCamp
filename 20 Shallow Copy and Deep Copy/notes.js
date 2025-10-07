//! 59 – Shallow Copy – Deep Copy

//* why there is shallow copy and deep copy?
//* becuase copying process is resource consuming, so we think a lot before we decide to copy something

//& Shallow Copy
(function () {
  let person = {
    //~ level 1: All the properties of the object
    name: "Ibrahim",
    year: 1998,

    //* nested object

    nested_object: {
      //~ level 2
      id: 1,
      subject: "math",
    },

    grades: [10, 20, 30], //* array is also non primitive, same treatment as nested object
  };

  let newPerson = { ...person }; //* spread operator provides shallow copy so only level 1 will be independent
  newPerson.name = "ahmed";
  newPerson.nested_object.subject = "Biochemstry";
  newPerson.grades[0] = 200;
  newPerson.grades[1] = 300;
  newPerson.grades[3] = 450;
  console.log(person);
  console.log(newPerson);
})();

//^======================================
//& deep Copy
(function () {
  //~ level 1
  let person = {
    name: "Ibrahim",
    year: 1998,

    //* nested object
    //~ level 2
    class: {
      id: 1,
      subject: "math",
    },

    grades: [10, 20, 30],
  };

  let newPerson = structuredClone(person); //* deep copy: all levels will be independent
  newPerson.name = "ahmed";
  newPerson.class.subject = "Biochemstry";
  newPerson.grades[0] = 200;
  newPerson.grades[1] = 300;
  newPerson.grades[3] = 450;
  console.log(person);
  console.log(newPerson);
})();
