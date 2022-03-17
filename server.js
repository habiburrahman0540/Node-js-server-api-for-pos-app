const express = require("express");
const app = express();
const port = 4050;
app.get('/',(req,res)=>{
    return res.send("Hi, I am API for POS Appliction.")
})
app.listen(port,()=>{
    console.log(`Server connected at port ${port}`)
})