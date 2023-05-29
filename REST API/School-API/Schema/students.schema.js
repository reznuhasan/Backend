const mongoose=require('mongoose');
const { Schema } = mongoose;
const studentRegister=new Schema({
    id:{
        type:Number,
        required:true,
        unique:true,
    },
    name:{
        type:String,
        required:true
    },
    roll:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
    },
    phone:{
        type:String,
        required:true,
    }
})

module.exports=studentRegister;