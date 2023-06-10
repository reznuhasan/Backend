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
        validate:{
            validator:function(v){
                return v.length>=3
            },
            message:"name at least more than 3 words"
        }
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



const userModel=new mongoose.model("user",userSchema);

module.exports=userModel;