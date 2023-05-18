let users=require('../models/users');
const {v4:uuidv4}=require('uuid')

// show all users
exports.allUsers=(req,res)=>{
    res.status(200).json(users)
}

// create new user
exports.newUser=(req,res)=>{
    const user={
        id:uuidv4(),
        name:req.body.name,
        email:req.body.email
    }
    users.push(user)
    res.status(201).json(users)
}

//update user
exports.updateUser=(req,res)=>{
    const id=req.params.id;
    users.filter(user=>user.id===id).map((selected)=>{
        selected.name=req.body.name;
        selected.email=req.body.email;
    })
   
    res.status(200).json(users)
}

//delete user
exports.deleteUser=(req,res)=>{
    const id=req.params.id;
    users=users.filter(user=>user.id!==id)
    res.status(200).json(users)
}