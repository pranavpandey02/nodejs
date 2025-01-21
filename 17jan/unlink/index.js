const fs = require("fs");
fs.unlink("pranav.txt",(err)=>
{
    if(err) throw err;

    console.log("file deleted");
})