const user=require('../Models/user.model');


const createUser=async(req,res)=>{
    try{
        const newUser=new user(req.body);
        newUser.name=req.body.username
        newUser.email=req.body.useremail
        newUser.save();
        res.status(200).json({message:"user create successfully",newUser})
    }catch(err){
        res.status(500).json({error:"server side error",err})
    }
}
const showUser=async(req,res)=>{
    try{
        const users=await user.find({});
        res.json(users);
    }catch(err){
        res.status(500).json({error:"server side error",err})
    }
}


module.exports={createUser,showUser}