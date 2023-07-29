const mongoose=require('mongoose')
const {Schema}=mongoose;

const userSchema=new Schema({
    userId:{
        type:Number,
        required:true,
        unique:true,
    },
    username:{
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
    },
    contact:{
        type:String,
        required:true,
    },
    age:{
        type:String,
        required:true,
    },
    blood:{
        type:String,
        required:true,
    }
})

const userModel=mongoose.model('user',userSchema);

module.exports=userModel;