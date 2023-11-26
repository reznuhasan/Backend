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
        // const profileUrl=await cloudinaryUpload(profilePath);
        // if(!profilePath){
        //     res.status(400).json({error:"profile must be required"})
        // }
        res.status(200).json({message:"user create successfully"})
    } catch (error) {
        res.status(400).json({error:"authentication error",error})
    }
}

export {registerUser}