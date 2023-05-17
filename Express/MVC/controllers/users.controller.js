const path=require('path')
const users=require('../models/users')
exports.homePage=(req,res)=>{
    res.sendFile(path.join(__dirname+'/../views/index.html'))
}
exports.getUser=(req,res)=>{
    res.sendFile(path.join(__dirname+'/../views/register.html'));
}
exports.saveUser=(req,res)=>{
    const {email,password}=req.body;
    users.push({email:email,password:password})
    res.send(users)
}