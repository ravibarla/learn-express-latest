const express = require("express");

//1. create server
const server = express();

//2. handle default request
server.get("/", 
//1. first middleware
(req,res,next)=>{
  console.log("first middleware")
  next()
}
//2. second middleware
,(req, res) => {
  res.send("welcome to express server");
});

//3. listen on specified port
server.listen(3100, () => {
  console.log("server is listening on server 3100");
});
