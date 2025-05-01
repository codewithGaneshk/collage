const mongoose = require("mongoose")

const mobileSchema = new mongoose.Schema({
    modelName:{
        type:String,
        required:true
    },
    Price:{
        type:Number,
        required:true
    },
    modelPhoto:{
        type:String,
        required:true
    }

},{timestamps:true})

module.exports=mongoose.model("MOBILE",mobileSchema)