const express=require('express');
const app=express();
const adminRouter=express.Router();

app.get('/',(req,res)=>{
    res.send(a)
})
app.use((err,req,res,next)=>{
    console.log(err.message)
})
module.exports=app;