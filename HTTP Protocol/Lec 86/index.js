//! 86 – HTTP – Bearer Authorization (Token)

//* to generate token to the user, we need the correct password, after login

//* authorization with token is named Bearer

//& steps to follow:

//* Client requesting a token using username and password
//* server generate the token (by random bytes then convert it to string)
//* store the token in a file
//* sending the token to the client

//* setTimeout a few seconds then delete the token from the file (expiring mechanism)

//^=========

//* client sending a request using the token
//* check if the token exists in the file

//^ go to postman:

//^ import node js http module
const http = require("http");

const qs = require("querystring");

const { Buffer } = require("buffer");

const fs = require("fs");
const crypto = require("crypto");

//^ create server:

const server = http.createServer((req, res) => {
  let url = processURL(req.url);
  console.log(url.path);
  console.log(url.queryString);

  switch (url.path) {
    case "/":
      res.end("this is a response.");
      break;
    case "/hi":
      res.end("hello: " + url.queryString?.name);
      break;
    //* Client requesting a token using username and password
    case "/login":
      if (checkAuth(req.headers["authorization"])) {
        //* generate token by server (we are in server here!)
        generateToken();
        res.end("http server run on node js");
      } else {
        res.statusCode = 403;
        res.statusMessage = "Not authorized";
        res.end();
      }
      break;
    case "/who":
      if (checkAuth(req.headers["authorization"])) {
        res.end("http server run on node js");
      } else {
        res.statusCode = 403;
        res.statusMessage = "Not authorized";
        res.end();
      }

      break;

    default:
      res.statusCode = 406;
      res.statusMessage = "Not acceptable";
      res.end();
  }
});

//^ start the server:

server.listen(8000, () => {
  console.log("the server has already started, server is running on port 8000");
});

//*==============================================================================

function processURL(reqUrl) {
  const arr = reqUrl.split("?");
  return {
    path: arr[0],
    queryString: qs.parse(arr[1]),
  };
}

//^ pass to checkAuth, the value of authorization header

function checkAuth(auth) {
  if (auth == undefined) return false;
  if (auth.startsWith("Basic ")) {
    auth = auth.replace("Basic ", "");
    console.log(auth);
    let credentials = Buffer.from(auth, "base64").toString();
    console.log(credentials);
    credentials = credentials.split(":");
    return credentials[0] == "ibrahim93" && credentials[1] == "bebokepeer93";
  }
  if (auth.startsWith("Bearer ")) {
    auth = auth.replace("Bearer ", "");
    console.log(auth);
    let credentials = Buffer.from(auth, "base64").toString();
    console.log(credentials);
    credentials = credentials.split(":");
    return credentials[0] == "ibrahim93" && credentials[1] == "bebokepeer93";
  } else return false;
}

async function generateToken() {
  const token = crypto.randomBytes(16).toString("utf-8");

  //~ 16 in randomBytes for regular number of requests
  //~ 48 for rush number of requests
  //* store the token in a file
  await fs.promises.writeFile("token", token, "utf-8");
  //* setTimeout a few seconds then delete the token from the file (expiring mechanism)
  setTimeout(resetToken, 20000);
  return token;
}
async function resetToken() {
  await fs.promises.writeFile("token", "", "utf-8");
}

//* sending the token to the client
