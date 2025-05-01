const mongoose = require("mongoose")

const bankSchema = new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    AccountNo:{
        type:String,
        required:true
    },
    Branch:{
        type:String,
        required:true
    }
},{timestamps:true})

module.exports = mongoose.model("BANK",bankSchema)