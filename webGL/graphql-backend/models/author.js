const mongoose = require('mongoose')
const Schema = mongoose.Schema


const authorScheam = new Schema({
    name:String,
    age:String,
})


module.exports = mongoose.model("Author", authorScheam)