const mongoose= require('mongoose')
const { schema } = require('./user')

const Schema= mongoose.Schema

var productSchema= new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    image:{
        data:Buffer,
        contentType:String
    },
    name:{
        type:String
    },
    price:{
        type:Number
    },
    description:{
        type:String
    }
})

let Product=mongoose.model('Product',productSchema)
module.exports=Product