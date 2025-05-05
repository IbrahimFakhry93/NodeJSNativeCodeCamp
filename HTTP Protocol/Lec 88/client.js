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
    //! error place to call request.write
    // if (body) request.write(JSON.stringify(body)); //* send body in the request as string
    // console.log("body client: " + body);
    //* close event: means response has reached its end
    //* The 'close' event signals that no more data will be received from the server
    res.on("close", () => {
      if (cb) cb(data, res);
      else console.log(data); //* here I can use the data
    });
  });

  //& send body in the request
  //! my error that cause:  Unexpected end of JSON input
  //! this error is occurred in the server, because the server received empty body
  //! causing parsing error to be thrown
  //! because I was calling request.write(JSON.stringify(body)) inside the http.request callback above
  //! inside the HTTP response callback. However, by the time this callback is executed, you have already called request.end(),
  //! which terminates the request. As a result, the body is never sent,
  // //! so when the server listens for data on the "data" event (req.on('data')), it gets an empty string. Consequently, calling JSON.parse("") on an empty string results in the "Unexpected end of JSON input" error.
  if (body) request.write(JSON.stringify(body)); //* send body in the request as string

  //& Send Request:
  //^ note:
  //* request.end: finalize and terminates the request
  //* so if you
  request.end();

  //& Handle Error:

  request.on("error", (err) => {
    console.log(err.message);
  });
}

//& create hi function to handle /hi endpoint in server:

function hi() {
  const options = {
    method: "POST", //! any space like " POST" can cause this error
    //! Uncaught TypeError TypeError [ERR_INVALID_HTTP_TOKEN]: Method must be a valid HTTP token [" POST"]
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
      console.log("data:" + data); //* data receive from the server response, which is sent by res.end
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

//^ test simulation:

//* open cmd

//* cd "C:\1Programming\1 Node JS Cloud Native\NodeJSNativeCodeCamp\HTTP Protocol\Lec 88"

//* run on cmd: node server.js

//* run by vs code tab (run) client.js

//^ note:
//* any consoles in server.js will be shown on cmd
//* any consoles in client.js will be shown on debug console tab in vs code
