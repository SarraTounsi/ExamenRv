const express =require("express");
const http=require("http");
const path = require("path");
const app=express();
const chatRouter=require('./routes/chat')

app.set("views",path.join(__dirname,"views"));
app.set("view engine","twig");

app.use("/chat",chatRouter)
const server=http.createServer(app);
const io=require("socket.io")(server);
io.on("connection", (socket)=> {
    console.log ('User Connected..');
    io.emit('msg',"a new user has been connected!");
    socket.on("disconnect",()=>{
        console.log("disconnected ")
    })
    }); 
server.listen(3001,()=>console.log("server is run"));
