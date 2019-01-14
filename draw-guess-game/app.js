const express = require('express')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)

app.set("view engine", "ejs")
app.use(express.static('public'))

app.get("/",(req, res)=>{
    res.render("index")
})

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
    })
    socket.on('start', function(positionXandY){
        io.emit("start", positionXandY)
    })
    socket.on('drawing', function(positionXandY){
        io.emit("drawing", positionXandY)
    })
  });

http.listen(3000, function(){
    console.log('listening on *:3000');
  });