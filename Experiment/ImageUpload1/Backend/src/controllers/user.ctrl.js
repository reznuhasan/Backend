import { User } from "../models/user.model.js";
import { cloudinaryUpload } from "../utlis/cloudinary.utlis.js";


const registerUser=async(req,res)=>{
    try {
        const {name,email,password}=req.body
        console.log(name,email,password);
        const profilePath=req.file.path
        if(!profilePath){
            res.status(400).json({error:"profile must be required"})
        }
        console.log(profilePath)
        const profileUrl=await cloudinaryUpload(profilePath);
        if(!profilePath){
            res.status(400).json({error:"profile must be required"})
        }
        const user=new User({
            name:name,
            email:email,
            password:password,
            profile:profileUrl
        })
        const saveUser=await user.save()
        res.status(200).json({message:"user create successfully",saveUser})
    } catch (error) {
        res.status(400).json({error:"authentication error",error})
    }
}
const getAllUser=async(req,res)=>{
    try {
        const user=await User.find()
        res.status(200).json({message:"find user successfully",user})
    } catch (error) {
        res.status(400).json({error:"something failed",error})
    }
}

export {registerUser,getAllUser}