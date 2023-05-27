const mongoose=require('mongoose');
const userSchema=require('../Schema/user.schema')
const user=new mongoose.model('user',userSchema);

module.exports=user;