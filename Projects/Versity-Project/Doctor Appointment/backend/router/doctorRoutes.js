const express=require('express');
const { getAllDoctor, addDoctor, searchDoctor } = require('../controller/doctorCtrl');
const router=express.Router({
    caseSensitive:true,
});
const upload=require('../config/doctorMulter')

router.get('/',getAllDoctor);
router.get('/search/:key',searchDoctor);
router.post('/add',upload.single('image'),addDoctor)

module.exports=router;