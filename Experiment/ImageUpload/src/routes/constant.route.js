import express from "express";
import userRouter from "../routes/user.route.js"
const router=express.Router();

router.use('/api/v1/rizwan/user',userRouter)

export default router;