import { User } from "../model/user.model.js";
import { uploadImage } from "../utlis/cloudinary.utlis.js";

const userRegister = async(req, res) => {
    try {
        const { name, email, password } = req.body;
        console.log(name, email, password);
        const profileImage = req.files?.profile[0]?.path;
        console.log(profileImage)
        if (!profileImage) {
            res.status(400).json({ 'error': "profile is required" });
        }
        const userProfile=await uploadImage(profileImage)
        console.log(userProfile)
        if(!userProfile){
            res.status(400).json({ 'error': "profile is required" });
        }
        res.status(200).json({ message: "user created successfully" });
    } catch (error) {
        res.status(400).json({ error: "user creation failed", error });
    }
};

export { userRegister };
