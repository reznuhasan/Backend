import express from "express";
import { registerUser } from "../controllers/user.ctrl.js";
import { upload } from "../middleware/multer.middleware.js";
const router=express.Router();

router.post('/register',upload.single('profile'),registerUser)

export default router;