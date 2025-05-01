//! 82- HTTP – Protocol Introduction

//* HTTP Hypertext Transfer Protocol

//* HTTP protocol is a text based

//* client === user agent === user browser === your device === command line on OS terminal to

//* server address is linked to domain name

//* RFC specification for any protocol

//& URL

//* official name of any link on internet is called URL

//* URL: uniform Resource Locator

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
