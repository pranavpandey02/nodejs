const fs = require("fs");
fs.writeFile("pranav.txt","hanji sir tell me ",(err)=>
{
    if(err) throw err;

    console.log("file created");
})