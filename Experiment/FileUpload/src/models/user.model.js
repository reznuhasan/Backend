import mongoose,{Schema} from "mongoose";
import bcrypt from "bcrypt" 
import jwt from "jsonwebtoken";
const userSchema=new Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
    },
    email:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        unique:[true,'already used this email']
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        default:"user",
        enum:["admin","user"]
    }
})

userSchema.pre("save",async function(){
    this.password=await bcrypt.hash(this.password,10)
})
userSchema.methods.isPasswordCorrect=async function(password){
    return await bcrypt.compare(password,this.password);
}
userSchema.methods.accessTokenGenerator=function(){
    return jwt.sign({
        _id:this._id,
        name:this.name,
        email:this.email,
        role:this.role
    },
    process.env.ACCESS_SECRET_KEY,
    {
        expiresIn:process.env.ACCESS_KEY_EXPIRED
    }
    )
}

const User=mongoose.model('user',userSchema)
export default User;