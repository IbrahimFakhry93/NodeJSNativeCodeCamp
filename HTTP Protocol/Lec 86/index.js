//! 86 – HTTP – Bearer Authorization (Token)

//* to generate token to the user, we need the correct password, after login

//* authorization with token is named Bearer

//& steps to follow:

//* Client requesting a token using username and password
//* server generate the token (by random bytes then convert it to Hexadecimal string)
//* store the token in a file
//* sending the token to the client by postman

//* setTimeout a few seconds then delete the token from the file (expiring mechanism)

//^=========

//* client sending a request using the token
//* check if the token exists in the file

//^ go to postman:

//* send get request on: http://localhost:8000/login
//* authorization tab => basic token
//* enter username: ibrahim93, password: bebokepeer93
//* copy token from body response on postman
//* send get request on: http://localhost:8000/who
//* authorization tab => bearer token
//* enter token: 8c1fa9045fda39a17239f88ad135792f

//^ import node js http module
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
      res.end("hello: " + url.queryString?.name);
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

//& Title: Token Validation Check Explanation
//? Overview
//* The following line verifies that the token provided by the client is present within the stored token.
//* Code: if (token) return token.indexOf(auth) >= 0;

//? Step 1: Token Availability Check
//* It first confirms that the token has been successfully read from the file (i.e., the token is not empty).

//? Step 2: Searching for the Client's Token
//* The indexOf method is used to search for the client's token (stored in the variable `auth`) within the stored token string.

//? Step 3: Interpreting the indexOf Result
//* If the client's token is found within the stored token, indexOf returns an index of 0 or a positive number.
//* If not found, indexOf returns -1.

//? Step 4: Evaluating the Expression
//* The expression token.indexOf(auth) >= 0 returns true when the client's token is found (authorized).
//* It returns false if the client's token is not found (unauthorized).

//? Summary
//* This line acts as a validation check.
//* It ensures that if the client's token (provided in the request) is present in the stored token, then authorization is granted by returning true.
//* Otherwise, it returns false, denying the authorization.

//! can we use equal comparison === between token and auth or not? and why?

//& Answer:
//& Title: Token Comparison Methods in Node.js
//? Overview
//* Using '===' requires that the token provided by the client exactly matches the entire token stored in the file.

//? When to Use '==='
//* - The file contains exactly one token.
//* - There are no extra characters (such as spaces or newline characters) in the stored token.
//* - The formatting of both the stored token and the client-sent token is identical.

//? Why Using indexOf is Chosen in the Current Implementation
//* - indexOf checks if the client token appears anywhere within the stored token string.
//* - This method is more flexible if the stored token might include multiple tokens or if there is a chance of formatting differences.
//* - It prevents errors that may occur from strict formatting issues.

//? Conclusion
//* If you are confident that only one token exists and formatting is strictly controlled, then using '===' can work.
//* Otherwise, relying on indexOf provides a more robust solution.
