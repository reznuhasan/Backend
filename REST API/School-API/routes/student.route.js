const express=require('express');
const { showAllStudents,showRegister,createUser } = require('../controllers/students.controllers');
const router=express.Router();


router.get('/',showAllStudents)
router.get('/register',showRegister)
router.post('/create',createUser)
module.exports=router;