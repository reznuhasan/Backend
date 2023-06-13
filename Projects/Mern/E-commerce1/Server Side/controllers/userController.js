const User = require('../models/userModel')
const createError=require('http-errors')
const bcrypt = require('bcrypt');

const saltRounds = 10;

const getUsers = async(req, res,next) => {
    try{
        const search=req.query.search || "";
        const page=Number(req.query.page)|| 1;
        const limit =Number(req.query.limit) || 5;
        
        const searchRegExp=new RegExp('.*'+search+".*",'i')
        
        const filter={
            isAdmin: {$ne:true},
            $or:[
                {name:{$regex:searchRegExp}},
                {email:{$regex:searchRegExp}},
                {phone:{$regex:searchRegExp}},
            ]
        }
        const options={password:0};

        if(!users) throw createError(404,'no users found')
        const users=await User.find(filter,options).limit(limit).skip((page-1)*limit)

        const count=await User.find(filter).countDocuments()
        res.status(200).send({
            message:'users were returned',
            users,
            pagination:{
                totalPages:Math.ceil(count/limit),
                currentPage:page,
                previousPage:page>1 ? page-1:null,
                nextPage:page+1,
            }
        })

    }catch(error){
        next(error);
    }
}
const createUser = async (req, res) => {
    try {
        const allUser = await User.find({});
        const totalUser = allUser.length;
        const newUserId = (totalUser === 0) ? 101 : totalUser + 101;
        bcrypt.hash(req.body.password, saltRounds,async function (err, hash) {
            const newUser = new User({
                id: newUserId,
                name: req.body.name,
                email: req.body.email,
                password: hash,
                phone: req.body.phone
            });
            await newUser.save();
            res.status(200).json({ message: "user created successfully", newUser })
        });
        
    } catch (err) {
        res.status(500).json({ error: "server side error", err })
    }
}


module.exports = { getUsers,createUser}