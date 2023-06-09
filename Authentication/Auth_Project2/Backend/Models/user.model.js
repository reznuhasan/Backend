const mongoose=require('mongoose');
const {Schema}=mongoose;

const userSchema=new Schema({
    id:{
        type:Number,
        required:true,
        unique:true,
    },
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    }
})