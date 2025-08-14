//& Title: Using Tag Function for Safe SQL Query Construction in a Backend Application
//? Note:
//* This code demonstrates how to use a tag function called 'sql' to safely construct SQL query strings.
//* It processes a template literal, properly escaping variables (e.g., strings) to help prevent SQL injection.
//* In production, you would typically use parameterized queries or a dedicated ORM library for robust security.

function sql(strings, ...values) {
  // Initialize the query string.
  let query = "";
  console.log(strings); //~ [ 'SELECT * FROM users WHERE name = ', ';' ]
  // Loop over each literal part in the template.
  for (let i = 0; i < strings.length; i++) {
    query += strings[i];
    if (i < values.length) {
      let value = values[i];

      // If the value is a string, perform simple escaping by replacing single quotes.
      if (typeof value === "string") {
        value = value.replace(/'/g, "''"); // Escape single quotes by doubling them.
        query += `'${value}'`;
      } else {
        // For non-string values, append them directly.
        query += value;
      }
    }
  }
  return query;
}

// Example backend usage:
// Imagine 'userInput' is a name provided through user input, which might contain harmful characters.
const userInput = "O'Reilly";

// Use the tag function to safely insert the input into an SQL query.
const query = sql`SELECT * FROM users WHERE name = ${userInput};`;

console.log(query);
// Expected output: SELECT * FROM users WHERE name = 'O''Reilly';

//& Explanation:
//? The 'sql' tag function is designed to combine the literal strings of a template with embedded values.
//* Each value is checked: if it's a string, it gets escaped (here, single quotes are doubled), which helps protect against SQL injection.
//* In a backend application, this technique provides an extra layer of safety when constructing dynamic SQL queries.
//* Note that for full security in real applications, using parameterized queries provided by database drivers or ORM libraries is recommended.
//& End of Code

//& Title: Explanation of String Escaping in SQL Queries and SQL Injection Vulnerability
//? Note:
//* The purpose of escaping single quotes in a string is to prevent SQL injection attacks.
//* SQL injection occurs when an attacker can insert or "inject" malicious SQL code into your query
//* by manipulating string inputs that are embedded in SQL commands.

// Example without proper escaping:
// Consider a user-provided input that is malicious:
const unsafeInput = "'; DROP TABLE users; --";

// Suppose we dynamically build an SQL query without escaping:
const unsafeQuery = `SELECT * FROM users WHERE name = '${unsafeInput}';`;
console.log("Unsafe Query:", unsafeQuery);
/*
  Output:
  SELECT * FROM users WHERE name = '';
  DROP TABLE users; --';
  
  Explanation:
  - The input terminates the string literal for the name field.
  - It then appends a malicious command 'DROP TABLE users;'
  - The '--' marks the rest of the line as a comment, ignoring any trailing characters.
  - This can lead to deletion of data, or loss of the entire table.
*/

// Example with proper escaping:
// A simple escape function replaces single quotes with two single quotes to neutralize their terminative effect.
function escapeSQLString(str) {
  return str.replace(/'/g, "''");
}

const safeInput = unsafeInput; // In real cases, this would be user input.
const escapedInput = escapeSQLString(safeInput);

// Now build the SQL query with the escaped string:
const safeQuery = `SELECT * FROM users WHERE name = '${escapedInput}';`;
console.log("Safe Query:", safeQuery);
/*
  Output:
  SELECT * FROM users WHERE name = '''; DROP TABLE users; --';
  
  Explanation:
  - Each single quote in the input is replaced by two single quotes.
  - The escaped string no longer ends the initial string literal in the SQL command.
  - The database interprets the malicious part ('; DROP TABLE users; --) just as a literal string,
   not as executable SQL code.
*/

//& Explanation:
//? Why Escape Strings?
//* When constructing SQL queries that include user input, unescaped single quotes can break your string literals.
//* This can allow attackers to inject rogue SQL commands, causing data theft, data corruption, or even complete data loss.
//* By escaping single quotes, you ensure that the input is treated purely as data, preventing it from altering the query structure.
//* Although using parameterized queries (prepared statements) is the recommended practice for security,
//* proper escaping is a crucial concept when such queries are not feasible.
//& End of Explanation

(function () {
  //& Title: Example of Unescaped Single Quotes Leading to SQL Injection
  //? Note:
  //* This simple example shows how not escaping a single quote can alter an SQL query.
  //* The unescaped input terminates the original string, allowing an attacker to inject malicious SQL.

  // Malicious user input that is not escaped.
  const userInput = "'; DROP TABLE users; --";

  // Construct an SQL query using the unescaped user input.
  const unsafeQuery = "SELECT * FROM users WHERE name = '" + userInput + "';";

  console.log("Unsafe Query:", unsafeQuery);

  /*
    Output:
    SELECT * FROM users WHERE name = ''; DROP TABLE users; --';
    
    Explanation:
    The unescaped single quote in the userInput prematurely ends the string literal in the SQL query.
    This allows the malicious part ("DROP TABLE users; --") to be executed, potentially deleting the "users" table.


*/
  //& End of Code
})();
