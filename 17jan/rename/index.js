const fs = require("fs");
fs.rename("pranav.txt","mohit.txt",(err)=>
{
    if(err) throw err;

    console.log("file renamed");
})