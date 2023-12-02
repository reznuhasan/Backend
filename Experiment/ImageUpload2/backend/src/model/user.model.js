import mongoose,{Schema} from "mongoose";

const userSchema = new Schema({
    name:{
        type:"string",
        required:true,
    },
    email:{
        type:"string",
        required:true,
    },
    imageProfile:{
        type:"string",
        required:true,
    }
})

const User=mongoose.model("User",userSchema);
export default User;