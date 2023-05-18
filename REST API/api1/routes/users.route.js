const express=require('express');
const { allUsers, newUser,updateUser, deleteUser } = require('../controllers/users.controller');
const router=express.Router();

router.get('/users',allUsers);
router.post('/users',newUser);
router.put('/users/:id',updateUser)
router.delete('/users/:id',deleteUser)

module.exports=router;