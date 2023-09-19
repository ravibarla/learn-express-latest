const express = require("express");

const server = express();

server.get("/", (req, res) => {
  return res.send("welcome to express");
});

//my static file are in public folder which can be accessed directly
server.use(express.static("../public"));

server.listen(3300);
console.log("server is listening in 3300");
