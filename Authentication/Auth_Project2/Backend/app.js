const express=require('express');
const app=express();
const mongoose=require('mongoose')
const user=require('./Models/user.model')
const cors=require('cors')
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors())

// connect mongoose
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Auth_Project2');
  console.log("connect server successfully")
}
app.get('/',(req,res)=>{
    res.status(200).send('welcome to my authentication project 2')
})
app.post('/register',async(req,res)=>{
    try{
       console.log(req.body)
       res.status(200).json({message:"post successfully"})
    }catch(err){
        res.status(500).json({message:"server side error"})
    }
})
module.exports=app;