import express from "express"
import userRouter from "./user.route.js"
const router=express.Router();

router.use('/api/v1/rizwan/users',userRouter)

export default router;