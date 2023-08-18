const express=require('express');
const { getAllDoctor, addDoctor, searchDoctor, getOneDoctor, changeSerialNumber } = require('../controller/doctorCtrl');
const router=express.Router({
    caseSensitive:true,
});
const upload=require('../middleware/doctorMulter');
// const { isVerified } = require('../middleware/isVerified');

router.get('/',getAllDoctor);
router.get('/search/:key',searchDoctor);
router.get('/:name', getOneDoctor)
router.post('/add',upload.single('image'),addDoctor)
router.put('/:doctorId',changeSerialNumber);

module.exports=router;