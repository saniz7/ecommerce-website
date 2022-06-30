const mongoose = require('mongoose')
const Schema = mongoose.Schema;

var userSchema = new Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    IsAdmin:{
        type:Boolean,
        default:false
    }
})

let User=mongoose.model('User',userSchema)

module.exports = User