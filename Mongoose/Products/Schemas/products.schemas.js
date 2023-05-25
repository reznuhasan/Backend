const mongoose=require('mongoose');
const {Schema} =mongoose;

const productSchema=new Schema({
    name:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        range:[1,20000],
    },
    category:String,
    stock:{
        type:String,
        enum:['available','not available']
    }
})

module.exports=productSchema;