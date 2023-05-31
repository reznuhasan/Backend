const express=require('express');
const { getUsers, createUser } = require('./controller.user');
const router=express.Router();


router.get('/all',getUsers);
router.post('/',createUser);

module.exports=router;