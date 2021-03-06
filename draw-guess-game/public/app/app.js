$(document).ready(()=>{
    var socket = io();
    $('form').submit(function(e){
        e.preventDefault(); // prevents page reloading
        socket.emit('chat message', $('#input-message').val());
        $('#input-message').val('');
        return false;
    })
    socket.on('chat message',function(msg){
        console.log("get message")
        $('#messages').append($('<li>').text(msg))
        $('#messages').scrollTop($('#messages')[0].scrollHeight);
    })
    socket.on("join", function(msg){
        $('#messages').append($('<li>').text(msg))
    })
    socket.on("leave", function(msg){
        $('#messages').append($('<li>').text(msg))
    })
    socket.on("start", function(positionXandY){
        lastX = positionXandY[0]
        lastY = positionXandY[1]
    })
    socket.on("drawing", function(positionXandY){
        //update canvas
        ctx.beginPath()
        ctx.moveTo(lastX, lastY)
        ctx.lineTo(positionXandY[0], positionXandY[1])
        ctx.stroke()
        lastX = positionXandY[0]
        lastY = positionXandY[1]
    })
    socket.on('play',function(question){
        $('#question').text(question)
    })


    const canvas = document.querySelector("#draw")
    const drawblock = document.querySelector(".draw")
    const ctx =canvas.getContext('2d');
    
    canvas.width = drawblock.offsetWidth
    canvas.height = drawblock.offsetHeight
    
    $(window).resize(()=>{
        canvas.width = drawblock.offsetWidth
        canvas.height = drawblock.offsetHeight
        console.log(drawblock.offsetWidth)
    })
    
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.lineWidth = 1;
    
    let isdrawing = false
    let lastX = 0
    let lastY = 0
    let savedPicture
    
    function draw(e){
        if(!isdrawing) return
        ctx.beginPath()
        ctx.moveTo(lastX, lastY)
        ctx.lineTo(e.offsetX, e.offsetY)
        ctx.stroke()
        lastX = e.offsetX
        lastY = e.offsetY
        socket.emit('drawing', [e.offsetX, e.offsetY])
        ctx.strokeStyle = `black`
    }
    
    canvas.addEventListener("mousedown", (e)=> {
        isdrawing = true
        lastX = e.offsetX
        lastY = e.offsetY
        socket.emit('start', [e.offsetX, e.offsetY])
        console.log(isdrawing)
    })
    
    canvas.addEventListener("mouseup", ()=> {
        isdrawing=false
        console.log(isdrawing)
    })
    canvas.addEventListener("mouseout", ()=> {
        isdrawing=false
        console.log(isdrawing)
    })
    
    canvas.addEventListener("mousemove", draw)


    $('#play').on('click',function(){
        socket.emit('play')
        $('#play').toggle()
    })
})
