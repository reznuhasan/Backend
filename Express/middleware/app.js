const express=require('express');
const app=express();
const middleware=(req,res,next)=>{
    console.log('This is my middleware');
    req.currentTime=new Date(Date.now());
    next();
}
app.use(express.static('public'))
app.get('/',middleware,(req,res)=>{
    console.log('My name is rizwan '+req.currentTime)
    res.sendFile(__dirname+'/index.html')
})
app.get('/about',middleware,(req,res)=>{
    console.log('My name is Riznu '+req.currentTime)
    res.send('<h1>This is my About route</h1>')
})
module.exports=app;