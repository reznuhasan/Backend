const express=require('express');
const app=express();

app.get('/',(req,res)=>{
    res.send("Hello From other sides")
})

module.exports=app;