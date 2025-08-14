//! 65 – Promise – Create Long Chain of Promises

//& do this first in the terminal:

//* cd 'C:\1Programming\1 Node JS Cloud Native\NodeJSNativeCodeCamp\Promise\Lec 65'

const fs = require("fs");

//* build the executor fot the Promise class
function read_customer_id(resolve, reject) {
  console.log("read_customer_id");
  fs.readFile("./current_customer_id.txt", "utf-8", function (err, data) {
    if (err) reject(err);
    else resolve(data);
  });
}

function getCustomerData(customerId) {
  console.log("get customer data", customerId);
  //* return Promise
  //* pass executor function with resolve and reject to the executor
  //* write the logic of the executor function (ex. read file, write file, anything)
  return new Promise(function (resolve, reject) {
    fs.readFile("./costumersData.txt", "utf-8", function (err, data) {
      if (err) reject(err);
      else {
        data = JSON.parse(data);
        // console.log(data);
        let { customers: customerData } = data;
        // console.log(customerData);
        customerData = customerData.filter(
          (customer) => customer.id === +customerId
        ); //* filter returns array, so customer data is array
        // console.log(customerData);
        if (customerData.length > 0) resolve(customerData[0]);
        else reject(new Error("customer data not found")); //*return error
      }
    });
  });
}

function writeCustomerData(customer) {
  console.log("write customer data", customer);
  return new Promise((resolve, reject) => {
    let flatObject = "";
    for (const p in customer) {
      flatObject += `${p}: ${customer[p]} \n`;
    }
    fs.writeFile(
      `./newCustomer_${customer.id}.txt`,
      flatObject,
      "utf-8",
      (err) => {
        if (err) reject(err);
        else {
          console.log("new file created");
          resolve();
        }
      }
    );
  });
}

function failure(err) {
  console.warn("read file failed");
  console.error(err.message);
}

new Promise(read_customer_id)
  .then(getCustomerData)
  .then(writeCustomerData)
  .catch(failure);
