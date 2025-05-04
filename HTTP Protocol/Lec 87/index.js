//! 87 – HTTP – Create HTTP Client

const http = require("http");

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

//* next step:
//* send request and receive response

let request = http.request(options, (res) => {
  let data = "";
  //* res: response object
  //* when object response(res) receives data, it emits (data) event
  res.on("data", (chunk) => {
    data += chunk;
  });

  //* close event: means response has reached its end
  res.on("close", () => {
    console.log(data); //* here I can use the data
  });
});
