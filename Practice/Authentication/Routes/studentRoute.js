const { createStudent, loginUser } = require('../Controller/studentCtrl')

const router=require('express').Router({
    caseSensitive:true,
})

router.post('/register',createStudent);
router.post('/login',loginUser)
module.exports=router;