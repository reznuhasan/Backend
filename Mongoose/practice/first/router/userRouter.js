const express=require('express');
const { addUser, getAllUser, getOne, updateUser } = require('../controller/userCtrl');
const router=express.Router({
    caseSensitive:true,
})

router.post('/create',addUser)
router.get('/',getAllUser)
router.get('/:name',getOne)
router.put('/:id',updateUser)


module.exports=router
