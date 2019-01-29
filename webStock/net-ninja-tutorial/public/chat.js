var socket = io.connect('http://localhost:4000')


const message = document.querySelector('#message')
const handle = document.querySelector('#handle')
const btn = document.querySelector('#send')
const output = document.querySelector('#output')
const feedback = document.querySelector('#feedback')


btn.addEventListener('click', function(){
    socket.emit('chat',{
        message: message.value,
        handle:handle.value
    })
})

message.addEventListener('keypress',function(){
    socket.emit('typing', handle.value)
})

socket.on('chat',function(data){
    feedback.innerHTML = ""
    output.innerHTML+='<p><strong>'+data.handle +': </strong>' +data.message + '</p>'
})

socket.on('typing', function(data){
    feedback.innerHTML = '<p><em>'+data+' is typing message'+'</em></p>'
})