// rooots in express js

const express = require("express");
const app = express();
// const stuRoute = require("./routes/studentRoutes");
const empRoute = require("./routes/emplloyeeRoutes");
// const proRoute = require("./routes/productsRoutes")
// const hospRoute = require("./routes/hospitalRoutes");

// app.use("/",hospRoute);
// app.use("/", empRoute);
// app.use("/products", proRoute);
// app.use("/students", stuRoute);
app.use("/employee",empRoute);

app.listen(8000, ()=>
{
    console.log("server run on port");
}
)