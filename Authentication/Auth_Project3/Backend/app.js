const express=require('express');
const app=express();
const mongoose=require('mongoose');

//connect mongoose
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
  console.log("database connect successfully")
}
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