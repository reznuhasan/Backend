const express=require('express');
const app=express();
const PORT=3000;
const userRouter=require('./routes/users.route');

app.use("/api/user",userRouter)
app.get('/',(req,res)=>{
    res.send('<h1>I am get a request at home route</h1>')
})
app.use((req,res)=>{
    res.send('<h1>404 Error,Not Valid URL</h1>')
})
module.exports={app,PORT}