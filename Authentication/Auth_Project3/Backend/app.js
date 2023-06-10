const express=require('express');
const app=express();

app.get('/',(req,res)=>{
    res.send('Authentication Project 3')
})
app.use('*',(req,res)=>{
    res.status(404).send("Wrong Page Search");
})
app.use((err,req,res,next)=>{
    res.status(505).json({message:"Server side error"})
})

module.exports=app;