const mongoose=require('mongoose');
const {Schema}=mongoose;

const MobileSchema=new Schema({
    id:{
        type:Number,
        required:true,
    },
    title:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    description:{
        type:String
    },
    image:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now
    },
    rating:{
       rate:Number,
       count:Number,
    }
})

const Mobile=new mongoose.model('Mobile',MobileSchema);

module.exports=Mobile;