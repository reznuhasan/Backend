const express=require('express');
const { getAllUsers, getUser, createUser,createUserMany,updateOneUser,findAllName,findAlllEmail,searchByName,searchByEmail} = require('../controllers/user.controller');
const router=express.Router();


router.get('/',getAllUsers)
router.get('/:id',getUser)
router.get('/name/:name',searchByName)
router.get('/names',findAllName);
router.get('/emails',findAlllEmail)
router.get('/email/:email',searchByEmail);
router.post('/',createUser)
router.post('/all',createUserMany);
router.put('/:id',updateOneUser);



module.exports=router;