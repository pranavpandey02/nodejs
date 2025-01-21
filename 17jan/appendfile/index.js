const fs = require("fs");

fs.appendFile("pranav.pdf","hlw pranav",(err)=>
{
    if(err) throw err;
    console.log("file created");
})