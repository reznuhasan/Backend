const express=require('express');
const { showAllStudents,showRegister } = require('../controllers/students.controllers');
const router=express.Router();


// router.get('/',showAllStudents)
router.get('/register',showRegister)

module.exports=router;