const jwt=require('jsonwebtoken');
const { secret_key } = require('../config/config');
const Student=require('../Model/user')
const authenticate=async(req,res,next)=>{
    try{
        let token=req.headers.authorization;
        if(!token){
            return res.status(401).json({message:"unauthorized"})
        }
        token=token.split(" ")[1];
        const decoded=jwt.verify(token,secret_key);
        const user=await Student.findOne({email:decoded.email});
        if(!user){
            return res.status(403).json({message:"unauthorized"})   
        }
        req.user=user;
        next();
     }catch(err){
        return res.status(400).json({message:"Invalid user"})
    }
}

module.exports={authenticate}