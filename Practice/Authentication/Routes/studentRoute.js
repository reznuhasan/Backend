const { createStudent } = require('../Controller/studentCtrl')

const router=require('express').Router({
    caseSensitive:true,
})

router.post('/register',createStudent);

module.exports=router;