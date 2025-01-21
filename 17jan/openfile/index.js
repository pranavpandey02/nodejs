const fs = require("fs");

fs.open("pranav.txt","w",(err,file)=>{

    if(err) throw err;

    console.log("empty file created");
});