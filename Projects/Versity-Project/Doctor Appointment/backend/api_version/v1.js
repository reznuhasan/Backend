const { Router } = require("express");
const docterRouter=require('../router/doctorRoutes')
const userRouter=require('../router/userRoutes')

const router = Router()

router.use("/doctors", docterRouter)
router.use("/users", userRouter)

export { router as v1 }