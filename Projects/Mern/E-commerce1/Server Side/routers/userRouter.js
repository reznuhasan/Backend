const express=require('express');
const { findUser } = require('../controllers/userController');
const router=express.Router();

router.get('/',findUser)


module.exports=router