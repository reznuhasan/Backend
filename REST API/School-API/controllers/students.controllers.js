const student=require('../models/students.models');

//ui of register form
const showRegister=(req,res)=>{
    res.sendFile('D:/riznu/Backend/REST API/School-API/views/register.html')
}
//show all user
const showAllStudents=async(req,res)=>{
    try{
        const result=await student.find({});
        res.status(200).json({message:"find all student successfully",result})
    }catch(err){
        res.status(500).json({message:"server side error"})
    }
}
//create one user
const createUser=async(req,res)=>{
    try{
        const {userName,userEmail}=req.body;
        const newUser={
            name:userName,
            email:userEmail
        }
        const newStudent=new student(newUser);
        await newStudent.save();
        res.send("user create successfully");
        res.status(200)
    }catch(err){
        res.status(500).json({message:"server side error"})
    }
    
}


module.exports={showAllStudents,showRegister,createUser}