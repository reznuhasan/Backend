const Student=require('../Model/student');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const createStudent=async(req,res,next)=>{
    try{
       const user=await Student.findOne({email:req.body.email})
       if(user){
        return res.status(403).json({message:"already user created"})
       }
       bcrypt.hash(req.body.password,saltRounds,async function(err,hash){
        if(err){
            return next(err)
        }
        const newStudent=new Student({
            ...req.body,
            password:hash,
        })
        try {
            const savedStudent = await newStudent.save();
            return res.status(201).json(savedStudent);
        } catch (saveError) {
            return next(saveError);
        }
       })
    }catch(err){
        next(err)
    }
}

module.exports={createStudent}