const express=require('express');
const { getAllDoctor, addDoctor, searchDoctor, getOneDoctor } = require('../controller/doctorCtrl');
const router=express.Router({
    caseSensitive:true,
});
const upload=require('../middleware/doctorMulter')

router.get('/',getAllDoctor);
router.get('/search/:key',searchDoctor);
router.get('/:name',getOneDoctor)
router.post('/add',upload.single('image'),addDoctor)

module.exports=router;