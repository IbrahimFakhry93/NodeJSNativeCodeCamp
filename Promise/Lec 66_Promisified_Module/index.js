//!  66 – Promise – Promisified modules

//& do this first in the terminal:

//* cd 'C:\1Programming\1 Node JS Cloud Native\NodeJSNativeCodeCamp\Promise\Lec 66'

const fs = require("fs");

//* note:
//* fs.promises.readFile("./current_customer_id.txt", "utf-8") : returns a promise not the value of the file

fs.promises
  .readFile("./current_customer_id.txt", "utf-8")
  .then((customerId) => {
    return fs.promises
      .readFile("./costumersData.txt1", "utf-8")
      .then((data) => {
        data = JSON.parse(data);
        // console.log(data);
        let { customers: customerData } = data;
        // console.log(customerData);
        customerData = customerData.filter(
          (customer) => customer.id === +customerId
        ); //* filter returns array, so customer data is array
        // console.log(customerData);
        if (customerData.length > 0) return customerData[0];
        else return new Error("customer data not found");
      });
  })
  .then((customer) => {
    console.log(customer);
    let flatObject = "";
    for (const p in customer) {
      flatObject += `${p}: ${customer[p]} \n`;
    }
    fs.promises.writeFile(
      `./newCustomer_${customer.id}.txt`,
      flatObject,
      "utf-8"
    );
  })
  .then(() => {
    console.log("new file is created");
  })
  .catch(failure);

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

// new Promise(read_customer_id)
//   .then(getCustomerData)
//   .then(writeCustomerData)
//   .catch(failure);
