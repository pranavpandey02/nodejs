const express = require("express");

const route = express.Router();
route.get("/location",(req,res)=>
{
    res.send("product loation page")
});
route.get("/sales",(req,res)=>
{
    res.send("products sales page")
});
route.get("/stock",(req,res)=>
{
    res.send("prodcuts stock page")
})
route.get("/price",(req,res)=>
{
    res.send("prodcuts price page")
})
module.exports=route;