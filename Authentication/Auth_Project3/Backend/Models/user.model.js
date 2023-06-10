const mongoose=require('mongoose');
const {Schema}=mongoose;
const userSchema=new Schema({
    id:{
        type:Number,
        required:[true,"id must be required"],
        unique:true
    },
    name:{
        type:String,
    },
    email:{
        type:String,
        required:[true,"email must be required"],
    },
    password:{
        type:String,
        required:[true,"password must be required"],
        validate:{
            validator:function(v){
                return v.length>=8;
            },
            message:"password must be 8 letters long"
        }
    }
})

const userModel=new mongoose.model('user',userSchema);

module.exports=userModel;