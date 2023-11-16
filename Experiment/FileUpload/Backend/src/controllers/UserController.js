import { checkUser } from "../service/UserService.js";
import User from "../models/user.model.js";
import uploadSource from "../utlis/Cloudinary.js";

const createUser=async (req,res)=>{
    try {
       const user=await checkUser(req.body.email);
       if(user){
        res.status(401).json({"message":"user already created"})
       } 
       const uploadedRes=await uploadSource(req.body.profile)
       if(!uploadedRes){
        res.status(401).json({"message":"image response is not found"})
       }
       const newUser=new User({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        profile:uploadedRes
       });
       const saveUser=await newUser.save();
       res.status(200).json({"message":"user created successfully",saveUser})

    } catch (error) {
        res.status(404).json({"error":"authentication failed"})
    }
}
const loginUser=async (req,res)=>{
    try {
        const user=await checkUser(req.body.email);
        if(!user){
            res.status(401).json({"message":"User not created"})
        } 
        const checkPassword=user.isPasswordCorrect(req.body.password);
        console.log(checkPassword)
        if(checkPassword===false){
            res.status(401).json({"message":"Password incorrect"})
        }
        const token="Barer "+ user.accessTokenGenerator();
        res.status(200).json({message:"user login successfully",token})
    } catch (error) {
        res.status(404).json({"error":"authentication failed"})
    }
}

export {createUser,loginUser}