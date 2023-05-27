const mongoose=require('mongoose');
const { Schema } =mongoose;

const userSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    }

})
userSchema.methods={
    findEmail:function(){
        return mongoose.model("user").find({},"email");
    }
}
module.exports=userSchema;
