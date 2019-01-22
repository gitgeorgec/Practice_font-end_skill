const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema')
const mongoose  = require('mongoose')
const cors = require('cors')

const app = express()
app.use(cors())
mongoose.connect('mongodb://test:test123@ds159641.mlab.com:59641/graphql-test',{ useNewUrlParser: true })
mongoose.connection.once("open",()=>{
    console.log('connect to database')
})
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql:true
}))

app.listen(4000, ()=>{
    console.log("server start on port 4000")
})