import express from "express";
import { createUser ,loginUser} from "../controllers/UserController.js";
import upload from "../middleware/multerMiddleware.js";

const router=express.Router();

router.post('/register',createUser)
router.post("/login",loginUser);


export default router;