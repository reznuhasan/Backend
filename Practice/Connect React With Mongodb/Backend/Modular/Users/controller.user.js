const user=require('./model.user');

const getUsers=async(req,res)=>{
    try{
        const totalUser=await user.find({})
        res.json(totalUser);
    }catch(err){
        res.status(500).json({error:"server side error",err}) 
    }
}
const createUser=async(req,res)=>{
    try{
       const totalUser=await user.find({});
       const newId=(totalUser.length===0)?101:totalUser.length+101;
       const newUser=new user();
       newUser.userId=newId;
       newUser.name=req.body.name;
       newUser.email=req.body.email;
       newUser.password=req.body.password;
       newUser.phone=req.body.phone;
       res.status(200).json({message:"user send successfully",newUser})
       newUser.save();
    }catch(err){
        res.status(500).json({error:"server side error",err})
    }
}

module.exports={createUser,getUsers}