//! 88 – HTTP – POST Request

const http = require("http");

const qs = require("querystring");

const { Buffer } = require("buffer");

const fs = require("fs");
const crypto = require("crypto");

//^ create server:

const server = http.createServer(async (req, res) => {
  let url = processURL(req.url);
  console.log(url.path);
  // console.log(url.queryString);

  switch (url.path) {
    case "/":
      console.log(req.headers);
      res.end("this is a response.");
      break;
    case "/hi":
      switch (req.method) {
        case "GET":
          res.end("hello GET: " + url.queryString?.name);
          break;
        case "POST":
          //* use req.on() and req.end() to capture the body comes in the request from the client
          let body = "";
          req.on("data", (chunk) => {
            body += chunk; //* receives the body as json string
          });
          req.end("end", () => {
            body = JSON.parse(body); //* convert body from json string to object, to access its properties
            res.end("hello POST: " + body.name);
          });
          break;
      }
      break;
    //* Client requesting a token using username and password
    case "/login":
      const auth = await checkAuth(req.headers["authorization"]);
      if (auth) {
        //* generate token by server (we are in server here!)
        const token = await generateToken();
        //* sending the token to the client (client is postman or our created client in client.js or client2.js in Lec87)
        res.end(token);
      } else {
        res.statusCode = 403;
        res.statusMessage = "Not authorized";
        res.end("credentials are not valid");
      }
      break;
    case "/who":
      const isToken = await checkAuth(req.headers["authorization"]);
      if (isToken) {
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

async function checkAuth(auth) {
  if (auth == undefined) return false;
  if (auth.startsWith("Basic ")) {
    auth = auth.replace("Basic ", "");
    console.log(auth);
    let credentials = Buffer.from(auth, "base64").toString();
    console.log(credentials);
    credentials = credentials.split(":");
    return credentials[0] == "ibrahim93" && credentials[1] == "bebokepeer93";
  }
  //* client sending a request using the token by postman

  if (auth.startsWith("Bearer ")) {
    auth = auth.replace("Bearer ", "");
    console.log(auth);
    //* check if the token exists in the file
    const tokens = await fs.promises.readFile("tokens", "utf-8");
    if (tokens) return tokens.indexOf(auth) >= 0; //* auth is the token send by client
  } else return false;
}

async function generateToken() {
  const tokens = crypto.randomBytes(16).toString("hex"); //* Hexadecimal string
  console.log(`Token:   ${tokens}`);
  //~ 16 bytes in randomBytes for regular number of receiving requests
  //~ 48 bytes for rush number of requests

  //* store the token in a file
  await fs.promises.writeFile("tokens", tokens + "\n", "utf-8");
  //* setTimeout a few seconds then delete the token from the file (expiring mechanism)
  setTimeout(resetToken, 20000);
  return tokens;
}
async function resetToken() {
  console.log("reset token");
  await fs.promises.writeFile("tokens", "", "utf-8");
}

//* sending the token to the client

//*===================
