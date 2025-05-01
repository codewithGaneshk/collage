const mongoose = require("mongoose")

const bikeSchema = new mongoose.Schema({
    model:{
        type:String,
        required:true
    },
    Price:Number,
    deliveryWaiting:String
},{timestamps:true})

module.exports=mongoose.model("BIKE",bikeSchema)