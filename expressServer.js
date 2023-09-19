const express = require("express");

//1. create server
const server = express();

//2. handle default request
server.get("/", 
(req, res,next) => {
console.log("this is from first middleware")
next()
});

server.get("/", 
(req, res) => {
  res.send("welcome to express server");
});

//3. listen on specified port
server.listen(3100, () => {
  console.log("server is listening on server 3100");
});
