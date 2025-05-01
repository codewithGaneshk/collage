const mongoose = require("mongoose")

const collageSchema = new mongoose.Schema({
    collageName: {
        type: String,
        required: true
    },
    Address: {
        type: String,
        required: true
    },
    contactNo: Number,
    url: {
        type: String,
        required: true
    },
}, { timestamps: true })

module.exports = mongoose.model("COLLAGE", collageSchema)