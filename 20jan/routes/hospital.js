const express = require("express");

const route = express.Router();

route.get("/home",(req,res)=>
{
    res.send("Welcome to hospital home page");
});

route.get("/patient",(req,res)=>
{
    res.send("welcome to patient page");
});

route.get("/admit",(req,res)=>
{
    res.send("patient admit page");
});

route.get("/save",(req,res)=>
{
    res.send("hospital save page");
})
module.exports = route;