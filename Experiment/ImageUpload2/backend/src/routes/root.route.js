import express from 'express';
import imageRouter from './image.route.js'
const router=express.Router();

router.use("/api/v1/images",imageRouter)

export default router;