import {v2 as cloudinary} from 'cloudinary';
import fs from "fs";
cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.CLOUD_KEY, 
    api_secret: process.env.CLOUD_SECRET,
  })
const uploadSource=async(localFilePath)=>{
    try {
        if(!localFilePath) return null;
        const res=await cloudinary.uploader.upload(localFilePath,{resource_type:"auto"})
        return res
    } catch (error) {
        fs.unlinkSync(localFilePath);
        return null
    }
}

export default uploadSource;