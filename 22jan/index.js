const express = require("express");
const app = express();

const mongoose = require("mongoose");
const collegeRoute = require("./route/collegeRoute");

mongoose.connect = ("mongodb://127.0.01:27017/pranav");


app.set("view engine","ejs");

app.use("/college",collegeRoute);

app.listen(5000,()=>{
    console.log("server run on port :5000")
});