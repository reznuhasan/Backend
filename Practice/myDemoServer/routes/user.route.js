const express=require('express');
const { createUser, showUser } = require('../controllers/user.controllers');
const router=express.Router();

router.get('/all',showUser)
router.post('/',createUser);


module.exports=router;