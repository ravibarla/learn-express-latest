const express = require("express");

//1. create server
const server = express();

//2. handle default request

function firstMiddleware(req, res, next) {
  console.log("this is first middleware");
  next();
}
function secondMiddleware(req, res, next) {
  console.log("this is second middleware");
  next();
}

//route level middleware
function globalMiddleware(req, res, next) {
  console.log("this is global middleware");
  next();
}
//this is going to execute all request
server.use(globalMiddleware);
server.get("/send", [firstMiddleware, secondMiddleware], (req, res) => {
  res.send("welcome to express server");
});

//3. listen on specified port
server.listen(3100, () => {
  console.log("server is listening on server 3100");
});
