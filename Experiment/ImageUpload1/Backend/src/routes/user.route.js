import express from "express";
import { getAllUser, registerUser } from "../controllers/user.ctrl.js";
import { upload } from "../middleware/multer.middleware.js";
const router=express.Router();

router.post('/register',upload.single('profile'),registerUser)
router.get('/all',getAllUser)

export default router;