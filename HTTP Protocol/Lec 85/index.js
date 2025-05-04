//! 85 – HTTP – Basic Authorization

//* credentials  بيانات الاعتماد
//* any resources you need to know to be able to enter a website

//^ credentials example
// username & password

//* we will use httpie as (desktop app http client) to handle http requests and responses
//* instead of browsers and curl on cmd

//* most famous http client is postman

//* software experts decided that credentials must be sent in every http request
///* but not the password, as security issue even if the password is encrypted
//* because there may be a hacker who has the key to decrypt the password

//* so we send token instead of password as credentials

//* token can be encrypted json object or random text
//* Senior engineer or solution architect should decide which type of token should be

//* this token must be renewed every certain of time after it expires
//* token should have limited permissions for certain action
//* so even if someone got the token he can use it for limited time and limited action

//* limited permissions  صلاحيات محدودة

//* we will ask the token by the user and password

//^ go to postman
//* add request
//* click on authorization => basic auth
//* enter user and password
//* go to terminal vs code: node index
//* return to postman and send request
//~ http://localhost:8000/who
//^ post man will create authorization header
//* authorization: basic <user&password base 64 string>

//* base64 is well known text format in software, read about
//* binary data converted into string
//* base64 is not an encryption

//* password and username converted into or encoded into base64

//* base64 is used in emails, any attachment will be converted into base64

//* we use buffer module to decode the base64 in the authorization, convert base64 into string utf

//* buffer is used to allocate data in memory with certain bytes length and put the needed binary data
//* this use case is rare in business applications
//* buffer object is aimed to handle binary data

//^ import node js http module
const http = require("http");

const qs = require("querystring");

const { Buffer } = require("buffer");

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
  // return {
  //   path: pathOnly(str),
  //   queryString: extractQuery(str),
  // };
  const arr = reqUrl.split("?");
  return {
    path: arr[0],
    queryString: qs.parse(arr[1]),
  };
}

//^ pass to checkAuth, the value of authorization header

function checkAuth(auth) {
  if (auth == undefined) return false;

  if (!auth.startsWith("Basic ")) return false;
  //* Basic aWJyYWhpbnTkzOmJlYm9rZXBlZXI5Mw==
  auth = auth.replace("Basic ", "");
  console.log(auth);
  //* aWJyYWhpbnTkzOmJlYm9rZXBlZXI5Mw==
  let credentials = Buffer.from(auth, "base64").toString();
  console.log(credentials); //* ibrahim93:bebokepeer93

  credentials = credentials.split(":");

  return credentials[0] == "ibrahim93" && credentials[1] == "bebokepeer93";
}

//* password isn't stored in database as plain text
//* password is stored in DB after (password hashing), hashing can't be returned to its origin state

//* so when we receive the input password of user while sign in
//* this password will be hashed again and compared to the hashed password stored in db

//*==========================================

//& Title: Understanding the "write after end" Error in Node.js HTTP Server
//? Error Cause
//* The error occurs because res.end() is called more than once in the "/who" route.

//? Breakdown of the "/who" Route Logic
//* First, the server checks the authorization header.
//*   - If the check passes, it calls res.end("http server run on node js").
//*   - If the check fails, it sets the status code and status message, then calls res.end().
//* After the if/else block, there's an additional res.end("http server run on node js") call, which gets executed regardless.

//? Why the Error Occurs
//* Once res.end() is called, the response is completed.
//* Calling res.end() a second time attempts to write to an already finished response, leading to the "write after end" error.

//? Resolution
//* Remove the extra res.end("http server run on node js") located outside the if/else block.
//* This ensures that the response is sent only once per request.
