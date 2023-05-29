const studentRegister=require('../Schema/students.schema');
const mongoose=require('mongoose');

const student=new mongoose.model('student',studentRegister);

module.exports=student;