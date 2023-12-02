import express from "express";
import { upload } from "../middleware/multer.middleware.js";
import { uploadImage } from "../controllers/image.ctrl.js";

const router=express.Router();

router.post('/',upload.single('profile'),uploadImage)

export default router;