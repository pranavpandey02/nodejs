const express = require("express");
const app = express();

const stuRoute = require("./route/student")
app.set("view engine","ejs");

app.use("/students",stuRoute)

app.listen(5001,()=>
{
    console.log("server run on 5001 port");
})