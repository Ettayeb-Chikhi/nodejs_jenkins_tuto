const express = require("express");

const app = express();

app.get("/",(req,res)=>{
    res.status(200).send("api is working");
})

app.listen(5000);