const users = require('../Models/userModel')

const addUser = async (req, res) => {
    try {
        const allUser = await users.find({})
        const totalUser=allUser.length;
        const id=(totalUser===0)?1:totalUser+1;
        const newUser = new users({...req.body,userId:id})
        const createUser = await newUser.save();
        res.status(202).json({
            message: "User created successfully",
            createUser,
        });
    } catch (err) {
        res.status(500).json({
            message: "Error creating user",
        });
    }
}

const getAllUser = async (req, res) => {
    try {
        const allUser = await users.find({})
        res.status(202).json({ message: "find user successfully", allUser })
    } catch (err) {
        res.status(500).json({
            message:
                "error users are not find",
        });
    }

}
const getOne = async (req, res) => {
    try {
        const user = await users.find({ name: req.params.name })
        res.status(202).json({ message: "find user successfully", user })
    } catch (err) {
        res.status(500).json({
            message:
                "error user are not find",
        });
    }
}
const updateUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const newPassword = req.body.password;
        const updatedUser = await users.updateOne({userId:userId},{
            password: newPassword
        }, {
            new: true
        })
        if (updatedUser) {
            res.json(updatedUser);
        } else {
            res.status(404).json({ message: 'User not found.' });
        }
    } catch (err) {
        res.status(500).json({
            message:
                "error updating user",
        });
    }
}


module.exports = { addUser, getAllUser, getOne, updateUser }