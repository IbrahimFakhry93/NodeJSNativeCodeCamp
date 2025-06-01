//! 71 – OOP 01
//* OOP:

//* form of descriptions and restrcitions to make the code maintainable and adjustable and esaz to interact with
//* and more secure

//* we model the application so the entities of the app be modelled as objects have a relation to each other
//* these entitines can be modelled in Database or in the our programming language

//* every entity is an object that contain the proper data( properties) and function or methods to process these data

//* search for sth called class diagram , it will help you to plan for your project

//* we make instances of the object, with different data, but all these instances have same structure

//& Class:
//* class is the template we use to make object instances

//* Javascript is prototype based
//* C++, Java, C# is class based

//^==================================================

//^ example of class form

class Person {
  first_name = "";
  last_name = "";

  constructor(first_name, last_name) {
    this.first_name = first_name;
    this.last_name = last_name;
  }

  display_name = function () {
    console.log(this.first_name + " " + this.last_name);
  };
}

let per = new Person("Ahmed", "Metwally");
per.display_name(); //* Ahmed Metwally

//^ example of function form

//* constructor function
function person(first_name, last_name) {
  this.first_name = first_name;
  this.last_name = last_name;

  display_name = function () {
    console.log(this.first_name + " " + this.last_name);
  };
}

let per2 = new Person("Ibrahim", "Bebo");
per2.display_name(); //* Ibrahim Bebo

//*======================================================================================
//! 72 – OOP 02  (Abstraction and Encapsulation)
//* four pillars of OOP:

//* Encapsulation and Abstraction are co-related
//* Inheritance and Polymorphism are co-related

//* Encapsulation:

//* collect all data and methods of certain entity in one container

//* Abstraction:

//* show only neccessary data nad methods to external world(ex.users) and hide the rest
//* isolate the external world of the implementation of the data nad methods inside the class

//* Inheritance

//* Polymorphism

(function () {
  class Person {
    //* private property
    #secret = "top secret";
    constructor(first_name, last_name) {
      //* public properties
      this.first_name = first_name;
      this.last_name = last_name;
    }

    //* getter function is actually property
    get full_name() {
      return this.first_name + " " + this.last_name;
    }

    get getSecret() {
      return this.#secret;
    }

    set secret(val) {
      if (val === "") return; //* validation line
      this.#secret = val;
    }

    //? or another form for set function (second form)

    set_secret(val) {
      if (val != "") {
        this.#secret = val;
      }
    }

    //? private method
    // #list_permissions() {
    //   return "Read,Update";
    // }
    //^ change implementation of #list_permissions()
    #list_permissions() {
      return ["Read,Update"];
    }

    can_create() {
      return this.#list_permissions().includes("Create"); //* return true or false
    }
  }

  //& usage part

  let per = new Person("Almando", "Petro");

  console.log(per.full_name);
  console.log(per.secret); //* undefined because it/s provide
  console.log(per.getSecret); ///* we can read private property by getter function

  per.secret = "new val";
  console.log(per.getSecret); //* new val
  per.secret = "";
  console.log(per.getSecret); //* top secret (value haven't change)

  //? call another form set function
  per.set_secret("new val2");
  console.log(per.getSecret); //* top secret (value haven't change)

  //* getter function can return public or private properties

  //^ using setter or getter function first form is cleaner than second form

  //& access private methods

  //  console.log(per.#list_permissions()); //! Property '#list_permissions' is not accessible outside class 'Person' because it has a private identifier.

  console.log(per.can_create()); //* false

  //* if we changed implementation of list_permissions
  //* nothing will be changed, because it's private so it's isolated of the user

  //* so usage part is isolated from the internal part of the object
})();

//*==================================================================================================

//! 73 – OOP 03

//* inheritance: class can inherit members from another class
//* in other words, add members of class to another class

//* polymorphism: child class can change the implementation of a method in a parent class

//^ note:
//* polymorphism can be applied only on public methods not private

(function () {
  //& Parent class
  class Person {
    constructor(first_name, last_name) {
      this.first_name = first_name;
      this.last_name = last_name;
    }

    list_permissions() {
      return []; //* Person has no powers صلاحيات
    }

    can_create(param) {
      return this.list_permissions().includes(param);
    }
  }

  //& Child class
  class Admin extends Person {
    list_permissions() {
      return ["Read", "Update", "create"];
    }
  }
  //& Another Child class
  class User extends Person {
    list_permissions() {
      return ["Read"];
    }
  }

  //* prototype === parent
  //* prototype of User is Person

  //* prototype of Person is Object
  //* any class you declare in JS will be child of Object

  //* prototype of Object is null
  //& usage part
  let admin = new Admin("Almando", "Petro");

  console.log(admin.can_create("create")); //* true
  console.log(admin.can_create("delete")); //* false

  let user = new User("Almando", "Petro");
  console.log(user.can_create("Read"));

  console.log(admin.full_name); //* JS will search through the prototype chain until find the full_name or find null if there is no full_name

  //& to access prototype:
  console.log(admin.__proto__); //* Person {constructor: ƒ, list_permissions: ƒ}
  //? same
  console.log(admin.constructor.prototype); //* Person {constructor: ƒ, list_permissions: ƒ}
  // admin.constructor.prototype  === admin.__proto__

  //& to check the class of an instance (admin)
  console.log(admin.constructor.name); //* Admin
  console.log(admin instanceof Admin); // true
  console.log(admin instanceof Person); // true
})();

//^===================================
