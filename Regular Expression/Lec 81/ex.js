//& Example:

//* Validate an email

//* email is divided into parts
//* email name (address) which is the part on the left of the @
//* domain name on the right of @

//* address@domain.tld

//* address@domain.com

//? restrictions:
//* any group of chars that contains only one @ and doesn't contain space
//* no more than one dot in the email name (address)
//* no more than one digits in the email name (address)
//* the part after @ may contains from 1 to 2 dots only ==== ahmed82@uni.edu.eg
//* the total length between 10 and 50

(function () {
  let data = "ahmed82@uni.edu.eg";

  let reg2 = /^((?=\.?)\S+@(?=\.{1,2})\S+).{10,50}$/;

  console.log(reg2.test(data));
})();

(function () {
  //* use boundary assertion because we need to validate the whole input (email input by user in the UI form)
  //* we don't want to extract the email from a text so we will use boundary assertion
  //* use divide and conquer technique to get the right pattern
  //* write a single pattern for each restriction then assemble them together
  //* start by any restriction not necessary in order
  //? the total length between 10 and 50
  //* ^(?=.{10,50}$)
  //? any group of chars that contains only one @ and doesn't contain space
  //* \w+@\w+
  //? no more than one dot in the email name (address)
  //* (?=((\w+\.\w+){0,2}\w+)@[\w\.]+$)
  //? no more than one digits in the email name (address)
  //* (?=(([a-z_]+\.\[a-z_]+){0,2}\[a-z_]+)@.+$)
  //? the part after @ may contains from 1 to 2 dots only ==== ahmed82@uni.edu.eg
  //* @(\w+\.\w+){1,2}
})();

//*=========================================================================================================================================

//& Title: Validate an Email with Custom Restrictions
//
//? Restrictions:
//* 1. The email must have exactly one "@" and no whitespace.
//* 2. The local part (before the @) may have at most one dot.
//* 3. The local part may include digits, but they must appear as one contiguous group only.
//* 4. The domain part (after the @) must contain 1 to 2 dots (e.g., domain.com or uni.edu.eg).
//* 5. The entire email length must be between 10 and 50 characters.
//
//? Regex Component Breakdown:
//* ^(?=.{10,50}$)
//*   - Assert that the entire string (email) is between 10 and 50 characters.
//*
//* (?!.*\s)
//*   - Assert that there are no whitespace characters anywhere in the string.
//*
//* (?![^@]*\.[^@]*\.)
//*   - Assert that in the local part (anything up to the "@"), there is at most one dot.
//*
//* (?![^@]*\d+.*\d+)
//*   - Assert that in the local part, there is at most one contiguous digit sequence.
//*
//* ([^@]+)
//*   - Match and capture the local part (all characters except "@").
//*
//* @
//*   - Match the literal "@" symbol.
//*
//* ([A-Za-z0-9-]+\.[A-Za-z0-9-]+(?:\.[A-Za-z0-9-]+)?)
//*   - Match and capture the domain part:
//*     • [A-Za-z0-9-]+ : one or more of letters, digits, or hyphens
//*     • \.           : a literal dot
//*     • [A-Za-z0-9-]+ : a mandatory segment
//*     • (?:\.[A-Za-z0-9-]+)? : an optional second dot with a subsequent segment
//*       (thus allowing either one or two dots).
//*
//* $
//*   - Ensure the match goes to the end of the string.
//
//? Final Regex Pattern:
const regexEmail =
  /^(?=.{10,50}$)(?!.*\s)(?![^@]*\.[^@]*\.)(?![^@]*\d+.*\d+)([^@]+)@([A-Za-z0-9-]+\.[A-Za-z0-9-]+(?:\.[A-Za-z0-9-]+)?)$/;

//& Title: Testing the Email Validation Pattern
(function () {
  //? Example: "ahmed82@uni.edu.eg" should pass
  let data1 = "ahmed82@uni.edu.eg";
  console.log("Data1 Valid (expected true):", regexEmail.test(data1));

  //? Example: Fails length if too short (9 characters total)
  let dataShort = "a@b.cd123";
  console.log("DataShort Valid (expected false):", regexEmail.test(dataShort));

  //? Example: Local part with two dots (not allowed)
  let dataDoubleDot = "ah.med.ed82@uni.edu.eg";
  console.log(
    "DataDoubleDot Valid (expected false):",
    regexEmail.test(dataDoubleDot)
  );

  //? Example: Local part with two separate digit groups (e.g., digit group "8" then later "2")
  let dataTwoDigits = "ahmed8def2@uni.edu.eg";
  console.log(
    "DataTwoDigits Valid (expected false):",
    regexEmail.test(dataTwoDigits)
  );

  //? Example: Domain with invalid format (e.g., three dots)
  let dataDomainError = "ahmed82@sub.uni.edu.eg.com";
  console.log(
    "DataDomainError Valid (expected false):",
    regexEmail.test(dataDomainError)
  );
})();
