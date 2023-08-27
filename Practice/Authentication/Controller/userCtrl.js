const { findUsers, findUserById } = require('../Service/userService')

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
        const user=await findUserById(userId);
        res.status(200).json({message:"find user successfully",user})
    }
    catch(err){
        next(err)
    }
}
const postUser=(req,res,next)=>{

}
const putUserById=(req,res,next)=>{
    
}
const patchUserById=(req,res,next)=>{
    
}
const deleteUserById=(req,res,next)=>{
    
}

module.exports={
    getUser,
    getUserById,
    putUserById,
    postUser,
    patchUserById,
    deleteUserById,
}