const express=require('express');
const { findUser, createUser } = require('../controllers/userController');
const router=express.Router();

router.get('/',findUser)
router.post('/register',createUser);


module.exports=router