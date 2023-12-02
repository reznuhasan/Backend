import IMAGE from "../model/image.model.js";
import { cloudImageUpload } from "../utlis/cloudinary.js";


const uploadImage =async(req,res)=>{
    try {
        const imageUrlPath=req.file.path;
        if(!imageUrlPath===null){
            res.status(404).json({message:"image is not found"});
        }
        const imageFind=await cloudImageUpload(imageUrlPath)
        if(imageFind===null){
            res.status(404).json({message:"image is not found"});
        }
        const image=imageFind.url

        res.status(200).json({"message":"image upload successful",image});
    } catch (error) {
        res.status(500).json({"message":"server side error"})
    }
}

export {uploadImage}