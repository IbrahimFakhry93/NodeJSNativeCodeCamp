//! 84 – HTTP – Handle Multi Paths and Querystring

//^ import node js http module
const http = require("http");

const qs = require("querystring");

//^ create server:

const server = http.createServer((req, res) => {
  if (req.headers["accept-encoding"]) {
    res.statusCode = 400;
    res.statusMessage = "Bad Request";
    res.end("We will not serve you!");
    return;
  }

  // let queries = extractQuery(req.url);
  //  console.log(queries); //* { name: 'ahmed', age: '24' }

  // const path = pathOnly(req.url);

  let url = processURL(req.url);
  console.log(url.path);
  console.log(url.queryString);

  switch (url.path) {
    case "/":
      res.end("this is a response.");
      break;
    case "/hi":
      // console.log(extractQuery(req.url));
      res.end("hello: " + url.queryString?.name);
      break;
    case "/who":
      res.end("http server run on node js");
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

//& Handle different paths

//^ test on cmd by curl:

//* curl localhost:8000/who
//* curl localhost:8000/hi
//* curl localhost:8000/
//* curl -i localhost:8000/where

//^===========================

//& Handle different query strings

//* General form of url contains query strings:
// domain:port/path?param1=val1&param2=val2
// query strings === param1=val1&param2=val2

//* req.url === /path?param1=val1&param2=val2

//^ create function to extract the query strings from the req.url
const extractQuery = function (reqUrl) {
  const regexp = /.*\?(.+)/;

  let queries = {};
  let allQueries = regexp.exec(reqUrl);
  if (allQueries != null) {
    //* allQueries[1] === param1=val1&param2=val2

    const reg = /([^=&]+)=([^=&]+)/g;

    let singleQuery = "";
    while ((singleQuery = reg.exec(allQueries[1]))) {
      console.log(singleQuery);
      queries[singleQuery[1]] = singleQuery[2];
      // console.log(queries);
    }
  }

  return queries;
};

//^ note:
//* when you send http req by curl on cmd
//* and you have multiple queries which include &
//* so it will handle & as special character, so you have to put it inside ""
//~ curl "localhost:8000/hi?name=ahmed&age=24"

//& extract the path only to pass it to switch
//* /path?param1=val1&param2=val2
const pathOnly = function (reqUrl) {
  console.log(`reqUrl: ${reqUrl}`); //* reqUrl: /hi?name=ahmed&age=24
  return reqUrl.split("?")[0]; //* reqUrl.split("?")[0]  === path  === /hi
};

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
