
const user=require('../models/user.model')

//find All users
const getAllUsers=async(req,res)=>{
    try{
        const result= await user.find({});
        res.status(200).json({message:"find user successfully",result})
    }catch(err){
        res.status(500).json({message:"server side error",err})
    }
}
//find only one user
const getUser=async(req,res)=>{
    try{
        const result= await user.find({_id:req.params.id});
        res.status(200).json({message:"find one user successfully",result})
    }catch(err){
        res.status(500).json({message:"server side error",err})
    }
}
//insert only one user
const createUser=async(req,res)=>{
    try{
        const newUser=new user(req.body);
        await newUser.save();
        res.status(200).json({message:"created data successfully",newUser})
    }catch(err){
        res.status(500).json({message:"server side error",err})
    }
}
//insert many user onece
const createUserMany=async(req,res)=>{
    try{
        const result=await user.insertMany(req.body);
        res.status(200).json({message:"created all user at once",result})
    }catch(err){
        res.status(500).json({message:"server side error",err})
    }
}
module.exports={getAllUsers,getUser,createUser,createUserMany}