const mongoose = require('mongoose');
const { defaultImagePath } = require('../secret');
const { Schema } = mongoose;

const userSchema = new Schema({
    id: {
        type: String,
        required: [true, "id must be needed"],
        unique: true,
    },
    name: {
        type: String,
        required: [true, "name must be needed"],
        validate: {
            validator: function (v) {
                return v.length >= 3
            },
            message: "name must be more than 3 letter"
        }
    },
    email: {
        type: String,
        required: [true, "Email must be provided"],
        trim: true,
        lowercase: true,
        match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter a valid email address"],
    },
    password: {
        type: String,
        required: [true, "Password must be provided"],
        minLength:[5,"The length of password at least 5 character"],
        maxLength:[15,"The length of password maximum 15 character"],
        validate: {
            validator: function (v) {
                // Check if the password contains at least one uppercase letter, one lowercase letter, and one digit
                const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;
                return regex.test(v);
            },
            message: "Password must contain at least one uppercase letter, one lowercase letter, and one digit",
        },
    },
    phone: {
        type: String,
        required:[true,'User phone is required']
    },
    image:{
        type:String,
        default:
            defaultImagePath 
    },
    address:{
        type:String,
        required:[true,'User address is required']
    },
    isAdmin:{
        type:Boolean,
        default:false,
    },
    isBanned:{
        type:Boolean,
        default:false,
    }
},{timestamps:true})

const userModel = new mongoose.model('user', userSchema);

module.exports = userModel;