const mongoose = require("mongoose")

const clothSchema = new mongoose.Schema({
    Brand:{
        type:String,
        required:true
    },
    Price:{
        type:Number,
        required:true
    },
    Material:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

module.exports = mongoose.model("cloths",clothSchema)