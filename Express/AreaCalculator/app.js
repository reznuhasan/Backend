const express=require('express');
const app=express();
const bodyParser=require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/triangle',(req,res)=>{
    res.sendFile(__dirname+'/triangle.html')
})
app.post('/triangle',(req,res)=>{
    const {base,height}=req.body;
    res.send(`Triangle Area is:${parseInt(base*height)/2}`)
})
app.get('/circle',(req,res)=>{
    res.sendFile(__dirname+'/circle.html')
})
app.post('/circle',(req,res)=>{
    const {radius}=req.body;
    res.send(`Circle Area is:${parseInt(radius*radius)*3.1416}`)
})
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
})
module.exports=app;