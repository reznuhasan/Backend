import mongoose, { Schema } from "mongoose";

const userSchema=new Schema({
    name:{
        type:String,
        required:true,
        index:true,
        unique:true,
        min:[3,'name greater than 3 words'],
        max:[30,'name less than 30 words'],
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        min:[5,'password must be greater than 5 words'],
        max:[15,'password must be less than 15 words'],
    },
    age:{
        type:Number,
        required:true,
    },
    mobile:{
        type:String,
        required:true,
        min:[10,'more than 10 digit'],
        max:[15,"less than 15 digit"],
    },
    profile:{
       type:String,
    },
    role:{
        type:String,
        default:"user",
        enum:['user','admin']
    }
},
{
    timestamps:true,
}
);


export const userModel=mongoose.model('User',userSchema);