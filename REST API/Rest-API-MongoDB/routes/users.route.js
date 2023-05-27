const express=require('express');
const { getAllUsers, getUser, createUser,createUserMany,updateOneUser,findAllName,findAlllEmail,searchByName} = require('../controllers/user.controller');
const router=express.Router();


router.get('/',getAllUsers)
router.get('/:name',searchByName)
router.get('/allname',findAllName);
router.get('/email',findAlllEmail)
router.get('/:id',getUser)
router.post('/',createUser)
router.post('/all',createUserMany);
router.put('/:id',updateOneUser);



module.exports=router;