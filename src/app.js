const express = require("express");
require("./db/conn");
const studentrouter = require("./routers/student");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(studentrouter);

app.listen(port,()=>{
    console.log(`connection is setup at ${port}`)
})



