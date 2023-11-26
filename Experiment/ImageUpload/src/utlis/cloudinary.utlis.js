import {v2 as cloudinary} from 'cloudinary';
import fs from "fs";

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
})

export const uploadImage=async (localImgPath)=>{
    try {
        const response=await cloudinary.uploader.upload(localImgPath,{
            resource_type:'auto'
        })
        console.log(response)
        return response
    } catch (error) {
        fs.unlink(localImgPath);
        console.log('image upload failed');
    }
}