//! 82- HTTP – Protocol Introduction

//* HTTP Hypertext Transfer Protocol

//* HTTP protocol is a text based

//* client === user agent === user browser === your device === command line on OS terminal
//* === here means can be

//* server address is linked to domain name

//* RFC specification for any protocol

//& URL

//* official name of any link on internet is called URL

//* URL: Uniform Resource Locator

//* URI: Unified Resource Identifier, specified for resource: ID, online service

//* HTTP use URI to describe the resource it interacts with (url)
//* URI is the general idea
//* URL is the application of URI

//* Every Device should has IP to connect with other device
//* Domain name will be resolved to IP address of the server

//~ Port Number
//* Port Number in URL: the port refers to the communication endpoint
//* that a server uses to process incoming requests

//* when we create our own http server, we choose port number above 2000
//* because they are usually occupied

//^ Default port No:
//*  80 (http)
//*  443 (HTTPS)
//*  3306 MySQL server

//* When client send http request, it must include domain name and port number
//* and the default port No is 80

//~ Fragment in url:
//* we can send on the url the id of html element and place it in #fragment

//^ URL Components:
//* scheme: https
//* :
//* hier-part: //
//* authority: domain name(facebook.com) + port Number
//* path: express the required resource
//* query: ?query=query value
//* fragment: #fragment

//& Title: Understanding Ports in a URL

//* When application on server receives request, this app request port number from the OS (server operating system)
//* port is not something physical,not physical hardware

//* if this port is occupied by another app, then OS rejects the request and returns error: port in use

//* Port data type on all operating systems is unsigned(+) 16 bit int
//* its range from 0 to 65535: that's the number of ports that OS can interact with

//? 1. Structure of a URL with Port
//* The port in a URL defines the communication endpoint for a service running on a server.
//* Format: `protocol://domain-name:port/path`
//* Example: `http://example.com:8080/home`

//? 2. Components of a URL
//* **Protocol:** Defines the communication method (HTTP, HTTPS, FTP).
//* **Domain Name:** Identifies the web server (e.g., example.com).
//* **Port Number:** Specifies the entry point for data transmission on the server.
//* **Path:** Directs the request to a specific resource (e.g., /home).

//? 3. Common Port Numbers in URLs
//* **Port 80** → Default port for HTTP (can be omitted).
//* **Port 443** → Default port for HTTPS (secure web browsing).
//* **Port 8080** → Often used for web applications as an alternative HTTP port.
//* **Port 21** → Used for FTP (File Transfer Protocol).
//* **Port 3306** → Used for MySQL database communication.

//? 4. Why Use a Port in a URL?
//* Directs requests to the correct application running on the server.
//* Allows multiple services to operate on the same domain with different ports.
//* Some applications require specific ports for proper functionality (e.g., web servers, databases, APIs).

//& Title: How an Application Binds to a Port on an Origin Server

//* When an application on an origin server wants to communicate over a network, and received request
//* it must request access to a specific port from the operating system

//? 1. Binding to a Port
//* The application requests the OS to "bind" (assign) a specific port number.
//* Web servers commonly request port **80** (HTTP) or **443** (HTTPS).

//? 2. Listening for Connections
//* Once the OS grants the port, the application starts "listening" for incoming client requests.
//* This ensures the server is ready to process network traffic.

//? 3. Handling Requests
//* When a client (such as a web browser) sends a request, it reaches the server via the assigned port.
//* The application processes the incoming data and responds accordingly.

//? 4. Why This Process Matters
//* Allows multiple applications on the same server to handle different network traffic.
//* Ensures proper data routing between clients and the server.
//* Helps with network efficiency and security.
//*========================================================================

//& HTTP Request components:
//* HTTP Method: HTTP Method + path + version
//* Headers: key + value
//^ there is empty line separate between header and body
//* Body: in case of POST, PUT

//& HTTP Methods:

//* http methods represents the reason of http request

//* GET:  information retrieval
//* POST: add new resource (sent in the payload /request  body)
//* PUT:  edit resource (update)
//* DELETE: delete resource

//* so to allow server correctly apply this http methods correctly
//* the code of the request must handle correctly the method
//* ex. method to update, the handling function logic must be written to update

//* so defining the request method by its name only, doesn't force server to apply so

//& Header:
//* User-Agent: curl/7.16.3 libcurl/7.16.3

//* curl: command to execute http request by the command line interface (OS terminal)

//*===============================================================================================

//! 83 – HTTP – Create HTTP Server

//* Node js provides http module to interact with HTTP protocol

//^ import node js http module
const http = require("http");

//* http depends on TCP protocol to transport requests and responses

//* Node JS provides Net module to interact with TCP protocol

//* http module depends on Net Module which is responsible to communicate with OS and port requesting and sockets

//* http module is responsible for reading and forming http responses

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

//* req contains all information about the request that we will send
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

//* run on terminal:
//~ node index
// it will give:
// the server has already started, server is running on port 8000

//* To stop the server without closing the terminal, you can use the following shortcut:
//~ Press Ctrl + C in the terminal.

//* go to browser and send this request:
//~ localhost:8000

//* it returns on the screen:
// this is a response.

//* inspect => network tab and refresh again
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

//? adjust the server to make it accept request in case it contains certain headers
//* so refuse certain requests by their headers

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

//* Details of requests and responses are defined bz the developer team and especially the security member

//^ Example:
//* We don't want to serve requests coming from the browser.
//* so browser add for example accepting coding property to the header
//* note header is an option

//^ note:

//* we can act as a browser by curl in the cmd and the server can be deceived by that
//* so the issue in http protocol is loose so we need in backend to manage many restrictions and conditions

//*==========================================================================================================

//! 84 – HTTP – Handle Multi Paths and Querystring
