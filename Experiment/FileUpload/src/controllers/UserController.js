import { checkUser } from "../service/UserService.js";
import User from "../models/user.model.js";

const createUser=async (req,res)=>{
    try {
       const user=await checkUser(req.body.email);
       if(user){
        res.status(401).json({"message":"user already created"})
       } 
       const newUser=new User(req.body);
       const saveUser=await newUser.save();
       res.status(200).json({"message":"user created successfully",saveUser})

    } catch (error) {
        res.status(404).json({"error":"authentication failed"})
    }
}


export {createUser}