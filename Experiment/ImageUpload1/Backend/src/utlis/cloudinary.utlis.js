import {v2 as cloudinary} from 'cloudinary';
import fs from "fs"
cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.CLOUD_API_KEY, 
    api_secret: process.env.CLOUD_API_SECRET
});

export const cloudinaryUpload=async (localImagePath)=>{
    try {
        const res=await cloudinary.uploader.upload(localImagePath,{
            resource_type:"auto"
        })
        console.log("cloudinary url",res)
        fs.unlinkSync(localImagePath)
        return res.url
    } catch (error) {
        fs.unlink(localImagePath)
        console.log('cloudinary image upload failed')
        return null
    }
}