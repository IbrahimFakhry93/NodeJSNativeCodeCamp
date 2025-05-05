//! 87 – HTTP – Create HTTP Client

//* how to create http client in Node JS
//* so our code communicate with the http server or http api
//* and handle its response

const http = require("http");

//& Prepare the request
//* localhost === 127.0.0.1 : represents server from local device (your computer)

//* options request
const options = {
  method: "GET",
  hostname: "127.0.0.1",
  port: 8000,
  path: "/",
  headers: {
    "user-agent": "node.js",
  },
};

//& create function for creating requests
//* next step:
//* send request and receive response

let request = http.request(options, (res) => {
  //* res: response object and it's not the actual response, it's object to handle the received response( which will be data)

  let data = ""; //* data received from response
  //* when object response(res) receives data, it emits (data) event
  res.on("data", (chunk) => {
    data += chunk;
  });

  //* close event: means response has reached its end
  res.on("close", () => {
    console.log(data); //* here I can use the data
  });
});

//& Send Request:

request.end();

//& Handle Error:

request.on("error", (err) => {
  console.log(err.message);
});

//* if you run this file without starting the server
//! connect ECONNREFUSED 127.0.0.1:8000

//^ to test:

//* open cmd
//* navigate to server folder (index.js in Lec86)
//* run: node index.js
//* then run by vs code run tab: client.js in lec 87

//*==============================

//& Simulate login request:
//^ open: client2.js
