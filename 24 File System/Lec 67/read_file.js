const fs = require("fs");

const file_name = "current_customer.txt";

//& read file methods:

let data = fs.readFileSync(file_name, "utf-8");
console.log(data);
