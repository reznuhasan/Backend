const express=require('express');
const { createUser, getUsers } = require('../controllers/userController');
const router=express.Router();

router.get('/',getUsers)
router.post('/register',createUser);


module.exports=router