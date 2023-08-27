const User=require('../Model/user');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt=require('jsonwebtoken');
const { secret_key } = require('../config/config');
const createUser=async(req,res,next)=>{
    try{
       const user=await User.findOne({email:req.body.email})
       if(user){
        return res.status(403).json({message:"already user created"})
       }
       bcrypt.hash(req.body.password,saltRounds,async function(err,hash){
        if(err){
            return next(err)
        }
        const newUser=new User({
            ...req.body,
            password:hash,
        })
        try {
            const savedUser = await newUser.save();
            return res.status(201).json(savedUser);
        } catch (saveError) {
            return next(saveError);
        }
       })
    }catch(err){
        next(err)
    }
}
const loginUser=async(req,res,next)=>{
    try{
        const user=await User.findOne({email:req.body.email});
        if(!user){
            return res.status(403).json({message:"unauthorized"});
        }
        bcrypt.compare(req.body.password, user.password, function(err, result) {
            if(err){
                next(err)
            }
            if(result===false){
               return res.status(403).json({message:"wrong user"})
            }
            const token=jwt.sign({name:user.name,email:user.email,role:user.role,activeStatus:user.activeStatus},secret_key,{expiresIn:"2h"})
            res.status(202).json({message:"user login successfully",token})
        });
    }
    catch(err){
        next(err)
    }
}
const privateRoute=async(req,res,_next)=>{
    console.log("I'm the user",req.user)
    res.status(202).json({message:"I'm private route"})
}
module.exports={createUser,loginUser,privateRoute}