const express=require("express")
// 1.create server 
const server=express()

//get request
server.get("/",(req,res,next)=>{
    res.send("this is get request  :")
})


//post request
server.post("/",(req,res,next)=>{
    res.send("this is post request :")
})

//put request
server.put("/",(req,res,next)=>{
    res.send("this is put request :")
})

//put request
server.delete("/",(req,res,next)=>{
    res.send("this is delete request :")
})


//3. listen on specified port
server.listen(3100, () => {
    console.log("server is listening on server 3100");
  });