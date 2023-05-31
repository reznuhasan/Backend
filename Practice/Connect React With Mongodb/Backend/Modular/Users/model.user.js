const mongoose=require('mongoose');
const {Schema}=mongoose;

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

const user=new mongoose.model('user',userSchema);

module.exports=user;