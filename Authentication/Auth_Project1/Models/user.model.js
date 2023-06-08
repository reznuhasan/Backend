const mongoose=require('mongoose');
const {Schema}=mongoose;

const UserSchema=new Schema({
    id:{
        type:Number,
        required:[true,'user id is missing'],
        unique:true
    },
    name:{
        type:String,
        required:[true,'user name is missing'],
        validate:{
            validator:function(v){
                return v.length >=3;
            },
            message: 'Name must be at least 3 characters long'
        }
    },
    
})