const express=require('express');
const { getAllDoctor, addDoctor } = require('../controller/doctorCtrl');
const router=express.Router();


router.get('/',getAllDoctor)
router.post('/add',addDoctor)

module.exports=router;