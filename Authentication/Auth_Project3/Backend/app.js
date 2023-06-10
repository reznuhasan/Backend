const express=require('express');
const app=express();
const mongoose=require('mongoose');
const cors=require('cors');
const user=require('./Models/user.model')
//connect mongoose
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/AuthProject3');
  console.log("database connect successfully")
}
//auth code
const bcrypt = require('bcrypt');
const saltRounds = 10;
//connect fronted and backend code
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.get('/',(req,res)=>{
    res.send('Authentication Project 3')
})
app.post('/register',async(req,res)=>{
    try{
        bcrypt.hash(req.body.password, saltRounds, async function(err, hash) {
            const newUser=new user({
                id:req.body.id,
                name:req.body.name,
                email:req.body.email,
                password:hash
            })
            await newUser.save();
            res.status(200).json({message:"User create successfully",newUser})
        });
    }catch(err){
        res.status(500).json({message:"server side error"})
    }
})
app.post('/login',async(req,res)=>{
    try{
        const {email,password}=req.body;
        const logUser=await user.findOne({email:email});
        if(logUser){
            bcrypt.compare(password, logUser.password, function(err, result) {
                if(result===true){
                    res.json({message:"verified user",logUser})
                }else{
                    res.status(404).json({message:"wrong user"})
                }
            });
        }
    }catch(err){
        res.status(500).json({message:"server side error"})
    }
})
app.use('*',(req,res)=>{
    res.status(404).send("Wrong Page Search");
})
app.use((err,req,res,next)=>{
    res.status(505).json({message:"Server side error"})
})

module.exports=app;