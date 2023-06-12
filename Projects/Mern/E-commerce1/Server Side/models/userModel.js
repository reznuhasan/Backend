const mongoose=require('mongoose');
const {Schema}=mongoose;

const userSchema=new Schema({
    id:{
        type:String,
        required:[true,"id must be needed"],
        unique:true,
    },
    name:{
        type:String,
        required:[true,"name must be needed"],
        validate:{
            validator:function(v){
                return v.length >=3
            },
            message:"name must be more than 3 letter"
        }
    },
    email:{
        type:String,
        required:[true,"email must be needed"],
    },
    password:{
        type:String,
        required:[true,"password must be needed"],
        validate:{
            validator:function(v){
                return v.length >= 6
            },
            message:"password must be more than 5 letter"
        }
    },
    phone:{
        type:String
    }
})

const userModel=new mongoose.model('user',userSchema);

module.exports=userModel;