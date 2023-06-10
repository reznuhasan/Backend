const express=require('express');
const app=express();
const mongoose=require('mongoose')
const user=require('./Models/user.model')
const cors=require('cors');
const md5 = require('md5');
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
       const newUser=new user({
        id:req.body.id,
        name:req.body.name,
        email:req.body.email,
        password:md5(req.body.password)
       });
       newUser.save()
       res.status(200).json({message:"post successfully",newUser})
    }catch(err){
        res.status(500).json({message:"server side error"})
    }
})
app.post('/login',async(req,res)=>{
    try{
       const {email,password}=req.body;
       const logUser=await user.findOne({email:email})
       if(logUser){ 
        if(logUser.password===md5(password)){
            res.status(200).json({message:"login successfully",logUser}) 
        }else{
            res.status(400).json({message:"wrong user"})
        }
       }else{
        res.status(400).json({message:"wrong user"})
       }
       
     }catch(err){
        res.status(500).json({message:"server side error"})
     }
})
module.exports=app;