import User from "../models/user.model.js";



export const checkUser=async (email)=>{
    return await User.findOne({email});
}