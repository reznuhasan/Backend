const User = require('../models/userModel')
const bcrypt = require('bcrypt');
const saltRounds = 10;

const findUser = (req, res) => {
    res.send("show all users successfully")
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


module.exports = { findUser,createUser}