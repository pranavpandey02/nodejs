const http = require("http");

http.createServer((req, res)=>

{
    res.write("<h1> Welcome </h1>");
    res.end();
}
).listen(8000);