import express from "express"
import { userRegister } from "../controllers/user.ctrl.js";
import { upload } from "../middleware/multer.middleware.js";

const router=express.Router();

router.post('/register',upload.fields([
    {
        name:"profile",
        maxCount:1
    }
]),userRegister)

export default router