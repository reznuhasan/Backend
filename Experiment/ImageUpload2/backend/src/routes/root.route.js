import express from 'express';
import imageRouter from './image.route.js'
import userRouter from "./user.route.js";
const router=express.Router();

router.use("/api/v1/images",imageRouter)
router.use("/api/v1/users",userRouter)
export default router;