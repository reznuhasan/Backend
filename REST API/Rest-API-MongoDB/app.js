const express=require('express');
const app=express();

app.get('/',(req,res)=>{
    res.send(`<h1>Welcome To My First Rest Api</h1>`)
})

module.exports=app;