const express=require('express');
const app=express();
const bodyParser=require('body-parser')


app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())
app.get('/register',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
})
app.post('/register',(req,res)=>{
    const {fullName,age}=req.body;
    res.send(`Hello ${fullName}: Your age is ${age}`)
})
module.exports=app;