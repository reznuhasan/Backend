const authRouter=require('./authRoute');
const userRouter=require('./userRoute');
const router=require("express").Router();
router.use('/api/v1/auth',authRouter)
router.use('/api/v1/users',userRouter)

module.exports=router;