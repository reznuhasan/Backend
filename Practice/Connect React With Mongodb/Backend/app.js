const express=require('express');
const app=express();
const mongoose=require('mongoose');
const cors=require('cors');

app.use(cors())
app.use(express.json());
app.use(express.urlencoded());

app.get('/',(req,res)=>{
    res.send('welcome to mangohat');
})

module.exports=app;