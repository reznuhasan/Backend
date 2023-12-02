import User from "../model/user.model.js";

const registerUser =async(req,res)=>{
    try {
        const {name,email,imageProfile}=req.body;
        console.log(name,email,imageProfile);
        res.status(200).json({success:"user create successfully"})
    } catch (error) {
        res.status(500).json({"message":"server side error"});
    }
}

export {registerUser}