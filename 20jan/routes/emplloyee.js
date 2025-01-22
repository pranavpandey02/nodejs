const express = require("express");

const route = express.Router();

route.get("/home",(req,res)=>
    {
        res.send("Emplloyee home page")
    });
    route.get("/about",(req,res)=>
    {
        res.send("Emplloyee about page")
    });
    route.get("/dep",(req,res)=>
    {
        res.send("Emplloyee dep page")
    })
    route.get("/salary",(req,res)=>
    {
        res.send("Emplloyee salary page")
    })
    module.exports=route;