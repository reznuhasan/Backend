const mongoose=require('mongoose');
const {Schema}=mongoose;
var encrypt = require('mongoose-encryption');
require('dotenv').config()

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
var encKey = process.env.ENC_KEY;

userSchema.plugin(encrypt, { secret: encKey,encryptedFields: ['password',"name"] });


const userModel=new mongoose.model("user",userSchema);

module.exports=userModel;