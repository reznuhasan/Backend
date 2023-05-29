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
        //find users
        const totalStudents=await student.find({});
        let newId=totalStudents.length+101;
        let studentId=(totalStudents.length===0)?101:newId;
        
        const {userName,userEmail,roll,password,contact}=req.body;
        const newUser={
            id:studentId,
            name:userName,
            roll:roll,
            email:userEmail,
            password:password,
            phone:contact
        }
        const newStudent=new student(newUser);
        await newStudent.save();
        res.send(`<h1>account create successfully,your id:${studentId}</h1>`)
    }catch(err){
        res.status(500).json({message:"server side error"})
    }
    
}


module.exports={showAllStudents,showRegister,createUser}