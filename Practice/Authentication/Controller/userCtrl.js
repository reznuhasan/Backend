const { findUsers,createUser, findByProperty } = require('../Service/userService');
const customError = require('../Utiljs/error');

const getUser=async(_req,res,next)=>{
    try{
        const allUsers=await findUsers();
        res.status(200).json({message:"find users successfully",allUsers})
    }catch(err){
        next(err)
    }
}
const getUserById=async(req,res,next)=>{
    try{
        const userId=req.params.userId;
        const user=await findByProperty("_id",userId);
        if(!user){
            throw customError("user are not found",400)
        }
        
        res.status(200).json({message:"find user successfully",user})
        
    }
    catch(err){
        next(err)
    }
}
const postUser=async(req,res,next)=>{
    const {name,email,password,role,activeStatus}=req.body;
    try{
        const user = await createUser({name,email,password,role,activeStatus});
        res.status(201).json({message:"create user successfully",user})
    }catch(err){
        next(err);
    }

}
const putUserById=(req,res,next)=>{
    try{
        const userId=req.params.userId;

    }catch(err){
        next(err)
    }
}
const patchUserById=(req,res,next)=>{
    
}
const deleteUserById=async(req,res,next)=>{
    try{
        const userId=req.params.userId;
        const user=await findByProperty("_id",userId);
        console.log(user)
        if(!user){
            throw customError("User is not available",400);
        }
        await user.deleteOne();
        res.status(203).json({message:"user delete successfully"})
    }catch(err){
        next(err)
    }
}

module.exports={
    getUser,
    getUserById,
    putUserById,
    postUser,
    patchUserById,
    deleteUserById,
}