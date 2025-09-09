//! 83 – HTTP – Create HTTP Server

//* Node js provides http module to interact with HTTP protocol

//^ import node js http module
const http = require("http");

//* http depends on TCP protocol to transport requests and responses

//* Node JS provides Net module to interact with TCP protocol

//* http module depends on Net Module which is responsible to communicate with OS and port requesting and all network stuff like sockets

//* http module is responsible for reading and forming http requests and responses

//^ create server:

const server = http.createServer((req, res) => {
  console.log(req.headers);
  console.log(req.url);
  //   if (req.url === "/favicon.ico") {
  //     res.statusCode = 404;
  //     res.statusMessage = "Not Found";
  //     res.end();
  //     return;
  //   }

  if (req.headers["accept-encoding"]) {
    res.statusCode = 400;
    res.statusMessage = "Bad Request";
    res.end("We will not serve you!");
    return;
  }
  if (req.url != "/") {
    res.statusCode = 404;
    res.statusMessage = "Not Found";
    res.end();
    return;
  }

  res.end("this is a response.");
});

//* createServer returns object
//* createServer receives callback which is invoked when http server receives request

//* req contains all information about the request that we will send by the client
//* res object that we will use to send response to the client

//* res.end: we use it to send the last part of the response or to send the whole response if it's small

//* res.write: to divide your response into chunks as this:

/*
  res.write('this')
  res.end(" is a response.");
*/

//^ start the server:
//* using listen function
server.listen(8000, () => {
  console.log("the server has already started, server is running on port 8000");
}); //* let the server to start listening on a port which will receive the requests on

//* the callback inside listen will be invoked when the server starts to listen on a port

//* run on vs code terminal:
//~ node index
// it will give:
// the server has already started, server is running on port 8000

//* To stop the server without closing the terminal, you can use the following shortcut:
//~ Press Ctrl + C in the terminal.

//^ go to browser and send this request:
//~ localhost:8000

//* it returns on the screen:
//~ this is a response.

//^ inspect => network tab and refresh again
//* you will find browsers made two requests:
//* localhost
//* favicon

//^ add:
// console.log(req.url); //* to createServer callback
//* refresh the browser
//* check the terminal
// the server has already started, server is running on port 8000
// /
// /favicon.ico

//* / : it's the path part of url request and (query strings and fragments if exist)
//* /favicon.ico: the request url of website icon browser tab

//^ console.log(req.url);
//* represent the part after authority part of url (domain name + port)
//* which is the path part, (query strings and fragment) if exist

//^ but if we run curl command on cmd
//~ curl localhost:8000
//* check the terminal
// the server has already started, server is running on port 8000
// /
//* curl doesn't request favicon

//^ to view the whole response by curl:
//* curl -i localhost:8000

//^ note:
//* if our http server serves html pages
//* so we need to handle the request of favicon and return our icon
//* but what is common that:
//* static files such as: html icons, images to be deployed on webserver application like Apache, nginx
//* and they manage these files, when we request filename, it responses to you with the filename

//^ note:
//* when we create http server on node js, so usually create API
//* and this API returns data only so in this case we ignore the request of favicon

//^ to ignore favicon request:

// if(req.url === '/favicon.ico'){

//      res.statusCode = 404;
//      res.statusMessage ='Not Found';
//      res.end();
//      return;
// }

//? or instead, we serve a certain path and ignore the rest

//   if (req.url != "/") {
//     res.statusCode = 404;
//     res.statusMessage = "Not Found";
//     res.end();
//     return;
//   }

//* go to browser and test:
//* localhost:8000/login
//! not found 404
//* because we haven't added a handling to this specific path in the server

//? adjust the server to make it accept request in case it contains certain headers
//* so refuse certain requests by their headers

//! to stop serve any requests from the browser
//* this header (req.headers["accept-encoding"]) made by the browser
// if (req.headers["accept-encoding"]) {
//     res.statusCode = 400;
//     res.statusMessage = "Bad Request";
//     res.end("We will not serve you!");
//     return;
//   }

//* go to browser and test:
//* localhost:8000/
//! bad request 400

//* it returns on the screen:
// We will not serve you!

//^ but if we run curl command on cmd
//~ curl -i localhost:8000
// HTTP/1.1 200 OK
// { host: 'localhost:8000', 'user-agent': 'curl/8.12.1', accept: '*/*' }

//* because there is no accept-encoding property in the headers of curl

//^ but if we add heading (-H "accept-encoding:any")
//~ curl -i localhost:8000 -H "accept-encoding:any"
//! HTTP/1.1 400 Bad Request
// Date: Sat, 03 May 2025 11:42:33 GMT
// Connection: keep-alive
// Keep-Alive: timeout=5
// Content-Length: 22

//! We will not serve you!
//^===========================

//* We use such technique if we want to control who he can access my server

//* Don't make the client knows all the details by your server response because he can be a hacker
//* المعرفة على قدر الحاجة

//* Details of requests and responses are defined by the developer team and especially the security member

//^ Example:
//* We don't want to serve requests coming from the browser.
//* so browser add for example accepting coding property to the header
//* note header is an option

//^ note:

//* we can act as a browser by curl in the cmd and the server can be deceived by that
//* so the issue in http protocol is loose so we need in backend to manage many restrictions and conditions

//*==========================================================================================================
