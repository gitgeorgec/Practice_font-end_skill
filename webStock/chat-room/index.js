const express = require('express')
const app = express()
const http = require('http').Server(app)
var io = require('socket.io')(http)

app.get("/",(req, res)=>{
    res.sendFile(__dirname+'/index.html')
})

// io.on('connection', function(socket){
//     console.log('a user connected')
// })

// app.listen(3000,()=>{
//     console.log('server running on 3000')
// })

// var app = require('express')();
// var http = require('http').Server(app);
// var io = require('socket.io')(http);

// app.get('/', function(req, res){
//   res.sendFile(__dirname + '/index.html');
// });

io.on('connection', function(socket){
  console.log('a user connected');
  io.emit("join", "someone join this room")
  socket.on('disconnect', function(){
      console.log('user disconnected')
      io.emit("leave", "someone leave this room")
  })
  socket.on('chat message', function(msg){
      console.log("message:"+ msg)
      io.emit('chat message', msg)
      setTimeout(()=>io.emit('chat message', "hello"),3000)
  })
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});