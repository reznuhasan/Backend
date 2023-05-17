const express=require('express');
const { getUser, saveUser } = require('../controllers/users.controller');

const router=express.Router();

router.get('/register',getUser)
router.post('/register',saveUser)

module.exports=router;