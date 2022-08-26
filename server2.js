const net = require("net");
const server = net.createServer();


server.on("connection", function(socket){
    console.log("A new connected user "+socket.remoteAddress + " " + socket.remotePort)
    socket.write("Hello message from server2")
})

const client = net.createConnection({port:3000})
    client.on("data", function(data){
        console.log(data.toLocaleString()) 
})

server.listen({host:"localhost", port:3001}, function(){
    console.log("server is running on localhost:3001")
})