const express = require('express')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const app = express()

app.use(cookieParser())
app.use(session({
    secret:'recommand 128bytes random string',
    cookie: {maxAge: 30*1000},
    resave: false,
    saveUninitialized: true
}))
app.get("/",function(req, res){
    if(req.cookies.isVisit){
        res.send("歡迎再次訪問")
    } else {
        res.cookie('isVisit',1,{maxAge: 30*1000})
        res.send("歡迎第一次訪問")
    }
})  

app.get("/session", function(req, res){
    if(req.session.isVisit){
        req.session.isVisit++
        res.send('<p>第' + req.session.isVisit + '次來此頁面</p>')
    }else{
        req.session.isVisit = 1
        res.send("歡迎第一次來此頁面")
        console.log(req.session)
    }
})

app.listen(3001,function(){
    console.log("listen 3001")
})