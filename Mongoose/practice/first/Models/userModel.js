const mongoose=require('mongoose');

const {Schema}=mongoose

const userSchema=new Schema({
    userId:{
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
        unique:true,
    },
    password:{
        type:String,
        required:true,
    }
})

const userModel=mongoose.model('users',userSchema);

module.exports=userModel;
