const express=require('express');
const { createAppointment, getAllPatient } = require('../controller/appointmentCtrl');

const router=express.Router({
    caseSensitive:true,
})

router.post('/create',createAppointment);
router.get('/all',getAllPatient);

module.exports=router;