import express from "express";
import { registerUser } from "../controllers/user.ctrl.js";
const router=express.Router();

router.post('/register',registerUser)

export default router;