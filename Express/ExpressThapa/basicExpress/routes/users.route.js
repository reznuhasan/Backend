const express=require('express');
const userAbout = require('../controller/user.controller');

const router=express.Router();

router.get('/about',userAbout)

module.exports=router;