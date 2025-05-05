//! 88 – HTTP – POST Request

//* post - put - delete all these reqs have body

//* I receive the body from the request and interact with it

//^ copy the server which is index.js in Lec 86 and paste it
//^ as server.js in Lec88

//^ copy client2.js in Lec87 and paste it in Lec88 as client.js

//* and handle its response

const http = require("http");

//& Prepare the request

//& create function for creating requests

//* cb: callback function to handle the data from the request
function createRequest(options, cb, body) {
  let request = http.request(options, (res) => {
    let data = "";
    //* res: response object
    //* when object response(res) receives data, it emits (data) event
    res.on("data", (chunk) => {
      data += chunk;
    });

    if (body) request.write(JSON.stringify(body)); //* send body in the request as string
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

//& create hi function to handle /hi endpoint in server:

function hi() {
  const options = {
    method: " POST",
    hostname: "127.0.0.1",
    port: 8000,
    path: "/hi",
    headers: {
      "user-agent": "node.js",
    },
  };
  createRequest(
    options,
    (data) => {
      console.log("data:" + data);
    },
    {
      name: "ibrahim fakhry",
      age: 26,
    }
  );
}

hi();

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
    console.log("data:" + data);

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

    if (res.statusCode == 403) {
      clearInterval(interval);
      login();
    }
  });
}

// login();
