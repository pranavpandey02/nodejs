const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
    {
        name:String,
        email:String,
        city:String,
        number:Number
    }
)

module.exports = mongoose.module("contact",contactSchema);