const express=require('express');
const app=express();
const mongoose=require('mongoose')

// connect mongoose
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Auth_Project2');
}
app.get('/',(req,res)=>{
    res.status(200).send('welcome to my authentication project')
})

module.exports=app;