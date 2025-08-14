//! 82- HTTP – Protocol Introduction

//* HTTP Hypertext Transfer Protocol

//* HTTP protocol is a text based

//* client === user agent === user browser === your device (localhost) === command line on OS terminal (by using curl)
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
//* fragments is a secondary resource of the primary resource in case the requested resource from the server
//* consists of no of parts such as: requesting html page from the server and html page its self consists of number elements
//* some of these elements referenced by fragments by id attribute
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

//^===========================================================

//& Title: Understanding the URL Path

//? What is the URL Path?
//? The path in a URL is the segment that identifies the specific resource on a server.
//? It occurs after the domain and before any query parameters ("?") or fragments ("#").
//* For example, in "http://example.com/products/item?color=red#details", the path is "/products/item".

//? Main Use Case of the URL Path:
//* The primary use case of the path is for routing purposes. When a client sends an HTTP request,
//* the server examines the path to determine which resource or endpoint to serve.
//* It directs requests to specific files, API endpoints, or dynamic handlers based on the defined routes.
//* This mechanism is fundamental in web frameworks and server configurations that deliver different content based on the URL.

//& Example: Function to Extract the Path from a URL
function getPath(urlStr) {
  //& Remove query parameters by splitting at the "?" character.
  let base = urlStr.split("?")[0];
  //& Remove any fragment identifiers by splitting at the "#" character.
  base = base.split("#")[0];
  return base;
}

//& Example Usage:
const exampleURL = "http://example.com/products/item?color=red#details";
const path = getPath(exampleURL);
console.log("URL Path:", path); // Expected output: "http://example.com/products/item"

//* In most server-side applications, such as with Express in Node.js or similar frameworks,
//* the extracted URL path is used to determine which controller or route handler should process the request.

//^==============================================================

//& Title: Understanding "Resource" in a URL Context

//? What is a Resource?
//* In web terminology, a "resource" refers to any piece of data or entity that the server can provide.
//* This could be an HTML file, an image, an API endpoint returning JSON, or any other piece of information.
//* Essentially, if it can be identified by a unique URI (Uniform Resource Identifier), it's considered a resource.

//? Why the Name "Resource"?
//* The term "resource" is used because these pieces of data are valuable and can be "consumed" or "manipulated" by clients.
//* In RESTful architecture, the concept is central: every resource is identified by a URL which clients can interact with
//* using standard HTTP methods (GET, POST, PUT, DELETE). This abstraction makes the design of web services more uniform and scalable.

//& Example: Representing and Accessing a Resource in a REST API
/**
 * Consider a simple blog service:
 *
 * URL: "http://example.com/posts/123"
 *
 * - "posts" represents the resource type: a collection of blog posts.
 * - "123" is the unique identifier for a specific post.
 *
 * Common operations on this resource might include:
 * - GET     "http://example.com/posts/123"   -> Retrieve the blog post.
 * - PUT     "http://example.com/posts/123"   -> Update the blog post.
 * - DELETE  "http://example.com/posts/123"   -> Remove the blog post.
 *
 * This consistent approach makes it clear that each blog post is a resource that is separately accessible.
 */

//& Function: getResourceById
//? Purpose:
//? Constructs a URL representing a specific resource based on its type and unique identifier.
function getResourceById(resourceType, id) {
  //& Build a URL string where resourceType is the collection name and id is the resource identifier.
  const url = `http://example.com/${resourceType}/${id}`;
  return url;
}

//& Example Usage:
const resourceURL = getResourceById("posts", 123);
console.log("Resource URL:", resourceURL); // Expected output: http://example.com/posts/123

//* In summary:
//* - A "resource" is any data entity you can access via a URL.
//* - The term emphasizes that these entities are valuable and can be manipulated using standard HTTP methods.
//* - This concept forms the foundation of RESTful APIs, ensuring a consistent approach to accessing and modifying data.

//! Imp
//^ RESTful APIs, ensuring a consistent approach to accessing and modifying data.

//^=========================================================

//& Title: Understanding Query in URL

//? What is a Query in a URL?
//? A query in a URL is the part that comes after the "?" character and is used to send extra data
//? (usually as key-value pairs) to the server. It is typically used to filter, search, or provide any
//? additional parameters needed for processing the request.
//* For example, in the URL "http://example.com/search?term=NodeJS&sort=asc", the query is "term=NodeJS&sort=asc".
//* Here, "term" and "sort" are keys with respective values.

//? Parsing the Query String in Node.js
//* We can use the node built-in 'querystring' module to easily extract and parse the query part of a URL.

const qs = require("querystring"); //& Include the querystring module for parsing queries

/**
 * & Title: processURL Function
 * ? Purpose:
 * ? This function separates a URL into its path and query string components.
 * ? It splits the URL at the "?" character and parses the query string into an object.
 * ? This helps in easily accessing parameters such as filtering criteria or search keywords.
 *
 * @param {string} reqUrl - The full URL string to process.
 * @returns {object} An object containing:
 *    - path: The URL path (before the '?' character)
 *    - queryString: The parsed query parameters as an object
 */
function processURL(reqUrl) {
  //& Split the URL using "?" as the delimiter.
  const arr = reqUrl.split("?");

  //& 'arr[0]' is the main path (e.g., "/search")
  const path = arr[0];

  //& 'arr[1]' (if present) is the query string (e.g., "term=NodeJS&sort=asc")
  //* Use qs.parse to convert it into a key-value object.
  const queryString = qs.parse(arr[1]);

  //& Return both the path and the parsed query string.
  return {
    path, //* The base URL path.
    queryString, //* The query parameters as an object.
  };
}

//& Example Usage:
const url = "http://example.com/search?term=NodeJS&sort=asc";
const parsedURL = processURL(url);
console.log(parsedURL);

//* Expected Output:
//* {
//*   path: "http://example.com/search",
//*   queryString: { term: "NodeJS", sort: "asc" }
//* }

//^====================================

(function () {
  //& Title: Understanding URL Fragments and Their Usual Use Cases

  //? What is a URL Fragment?
  //* A fragment is the portion of a URL that appears after the "#" symbol.
  //* It is used to reference a specific part within a web page and is handled entirely by the client.
  //* The fragment is not sent to the server in HTTP requests.
  //* For instance, in "http://example.com/page#section1", "#section1" is the fragment.

  //? Usual Use Cases for URL Fragments:
  //* 1. **In-page Navigation:** Anchors or identifiers within an HTML document allow users to jump directly to a section.
  //*    Example: <h2 id="section1">Section 1</h2> and linking via <a href="#section1">Go to Section 1</a>.
  //* 2. **Single-Page Applications (SPA):** Fragments are used as a simple routing mechanism (e.g., "#/home", "#/about").
  //* 3. **State Management:** They can indicate UI state (such as open tabs or dialog states) in client-side applications.
  //* 4. **Tracking and Analytics:** Sometimes used to pass parameters to client-side scripts for tracking without affecting server-side processing.

  //& Title: processFullURL Function
  //? Purpose:
  //? This function splits a URL into its main components: the base path, query parameters, and the fragment (if any).
  //? It demonstrates how to extract the fragment using string manipulation and the built-in 'querystring' module.
  const qs = require("querystring");

  /**
   * & Title: processFullURL Function
   * ? Purpose:
   * ? Splits the URL into three parts:
   * ? - path: The base URL before any query string or fragment.
   * ? - queryString: An object representing the parsed query parameters.
   * ? - fragment: The identifier after the "#" symbol (if present).
   *
   * @param {string} urlStr - The full URL string to process.
   * @returns {object} An object containing:
   *    - path: The base URL path (without query string and fragment).
   *    - queryString: The parsed query parameters as an object.
   *    - fragment: The fragment identifier (if any) without the "#" symbol.
   */
  function processFullURL(urlStr) {
    //& Split the URL at the '#' symbol to separate the fragment from the rest of the URL.
    const [urlWithoutFragment, fragment = ""] = urlStr.split("#");

    //& Next, split the non-fragment part at the "?" to separate the query string (if any).
    const [path, query] = urlWithoutFragment.split("?");

    //& Return an object containing the path, the parsed query parameters, and the fragment.
    return {
      path, //* Base URL path.
      queryString: qs.parse(query), //* Parsed query parameters as an object.
      fragment, //* Fragment identifier (if it exists).
    };
  }

  //& Example Usage:
  const fullURL = "http://example.com/page?term=NodeJS&sort=asc#section1";
  const parsedURL = processFullURL(fullURL);
  console.log(parsedURL);

  /* 
//* Expected Output:
//* {
//*   path: "http://example.com/page",
//*   queryString: { term: "NodeJS", sort: "asc" },
//*   fragment: "section1"
//* }
*/
})();

//*========================================================================

//& HTTP Request components:
//* HTTP Method: HTTP Method + path + version
//* Headers: key + value
//^ there is empty line separate between header and body
//* Body: in case of (POST, PUT), body is the payload of the request

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

//* Details of requests and responses are defined bz the developer team and especially the security member

//^ Example:
//* We don't want to serve requests coming from the browser.
//* so browser add for example accepting coding property to the header
//* note header is an option

//^ note:

//* we can act as a browser by curl in the cmd and the server can be deceived by that
//* so the issue in http protocol is loose so we need in backend to manage many restrictions and conditions

//*==========================================================================================================
