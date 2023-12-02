import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs';
cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.CLOUD_API_KEY, 
    api_secret: process.env.CLOUD_API_SECRET 
  });

 export const cloudImageUpload=async(localpath)=>{
    try {
        const res=await cloudinary.uploader.upload(localpath)
        fs.unlinkSync(localpath)
        return res
    } catch (error) {
        fs.unlink(localpath)
        console.log(`cloudinary Image upload failed`)
    }
  }