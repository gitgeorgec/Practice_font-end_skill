const express = require('express')
const app = express()

app.set("view engine", 'pug')
app.use(express.static('public'))

app.get("/", function(req, res){
    res.render('index',{title: 'pug practice', message: "this is h1 message"})
})

app.listen(3000, function(){
    console.log("server start")
})