
const user=require('../models/user.model')

//find All users
const getAllUsers=async(req,res)=>{
    try{
        const result= await user.find({}).exec();
        console.log(result)
        res.status(200).json({message:"find user successfully",result})
    }catch(err){
        res.status(500).json({message:"server side error",err})
    }
}
//find all name
const findAllName=async(req,res)=>{
    try{
        const result= await user.find({},"name").exec();
        const names= result.map(myUser=>myUser.name)
        res.status(200).json({message:"find user successfully",names})
    }catch(err){
        res.status(500).json({message:"server side error",err})
    }
}
const searchByName=async(req,res)=>{
    try{
        const result= await user.find({name:req.params.name}).exec(); 
        res.status(200).json({message:"find user successfully",result})
    }catch(err){
        res.status(500).json({message:"server side error",err})
    }
}
//find all email
const findAlllEmail=async(req,res)=>{
    try{
        const userEmail=new user();
        const allEmails=await userEmail.findEmail()
        const emails=allEmails.map(userE=>userE.email)
        res.status(200).json({message:"email",emails})
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
const updateOneUser=async(req,res)=>{
    try{
        const prevUser=req.params.id;
        const newUser=await user.findOne({_id:prevUser});
        const updateData=req.body;
        newUser.name=updateData.name;
        newUser.email=updateData.email;
        await user.updateOne({_id:prevUser},{$set:newUser})
        res.status(200).json({message:"Update user successfully",newUser})
    }catch(err){
        res.status(500).json({message:"server side error",err})
    }
}
module.exports={getAllUsers,getUser,createUser,createUserMany,updateOneUser,findAllName,findAlllEmail,searchByName}