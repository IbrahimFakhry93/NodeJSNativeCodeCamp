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

//* cb: callback function to handle the data from the request
function createRequest(options, cb) {
  let request = http.request(options, (res) => {
    let data = "";
    //* res: response object
    //* when object response(res) receives data, it emits (data) event
    res.on("data", (chunk) => {
      data += chunk;
    });

    //* close event: means response has reached its end
    res.on("close", () => {
      if (cb) cb(data, res);
      else console.log(data); //* here I can use the data
    });
  });

  //& Send Request:

  request.end();

  //& Handle Error:

  request.on("error", (err) => {
    console.log(err.message);
  });
}

let interval;

//& create Login Request:
function login() {
  //* options request
  const options = {
    method: "GET",
    hostname: "127.0.0.1",
    port: 8000,
    path: "/login",
    headers: {
      "user-agent": "node.js",
      authorization: "Basic aWJyYWhpbTkzOmJlYm9rZXBlZXI5Mw==",
    },
  };
  createRequest(options, (data) => {
    console.log("data:" + data); //* data will be the token received from the server
    //* data:384a78089cf4c8a9f303863a7232fef1, it will appear in debug console when we run client2.js
    // who(data);

    //* repeat request who endpoint after 8s
    interval = setInterval(who, 8000, data);
  });
}

//& create who Request: to simulate authorization
function who(token) {
  //* options request
  const options = {
    method: "GET",
    hostname: "127.0.0.1",
    port: 8000,
    path: "/who",
    headers: {
      "user-agent": "node.js",
      authorization: "Bearer" + token,
    },
  };
  createRequest(options, (data, res) => {
    console.log("data:" + data);
    //* data:384a78089cf4c8a9f303863a7232fef1, it will appear in debug console when we run client2.js

    //* if token is expired, it will give 403 response
    if (res.statusCode == 403) {
      clearInterval(interval);
      login();
    }
  });
}

login();
//* next step:
//* send request and receive response

//* if you run this file without starting the server
//! connect ECONNREFUSED 127.0.0.1:8000

//^ to test:

//* open cmd
//* navigate to server folder (index.js in Lec86)
//* run: node index.js
//* then run by vs code run tab: client.js in lec 87
