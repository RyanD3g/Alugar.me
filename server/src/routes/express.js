const express = require("express");
const app = express();

app.get('/home')

app.listen(3001, ()=>{
    console.log("Deploy com sucesso!!")
});