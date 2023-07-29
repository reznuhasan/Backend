const User = require('../Models/userModel');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const { Secret_key } = require('../config/userConfig');


const createUser = async (req, res) => {
    try {
        const allUser = await User.find({});
        const Id = (allUser.length === 0) ? 101 : allUser.length + 101
        bcrypt.hash(req.body.password, saltRounds, async function (err, hash) {
            if (err) {
                console.error('Error hashing password:', err)
                return res.status(500).json({ message: 'Server error' });
            }
            const newUser = new User({
                userId: Id,
                username: req.body.username,
                email: req.body.email,
                password: hash,
                contact: req.body.contact,
                age: req.body.age,
                blood: req.body.blood,
            })
            await newUser.save()
            res.status(201).json({ message: 'User created successfully', user: newUser });
        });
    } catch {
        console.error('Error creating user:', error);
        res.status(500).json({ message: 'Server error' });
    }
}
const loginUser=async(req,res)=>{
    try{
        const findUser=await User.findOne({email:req.body.email})
        if(!findUser){
            return res.status(401).send({
                success:false,
                message:"user is not found",
            })
        }
        const passwordMatch=await bcrypt.compare(req.body.password,findUser.password)
        if(passwordMatch){
            const payload={
                id:findUser.userId,
                username:findUser.username,
                email:findUser.email,
                contact:findUser.contact,
            }
            const token=jwt.sign(payload,Secret_key,{
                expiresIn:'2d'
            })

            return res.status(201).send({
                success:true,
                message:"user verified successfully",
                token:"Bearer "+token,
            })
        }else{
            return res.status(401).send({
                success:true,
                message:"password is not match",
            })
        }
    }
    catch(err){
        console.error("Error logging in:", err);
        res.status(500).json({ message: "Server error" });
    }
}

module.exports = { createUser,loginUser }