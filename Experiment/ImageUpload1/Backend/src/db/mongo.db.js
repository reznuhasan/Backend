import mongoose from "mongoose";
import { mongodbName } from "../constant.js";

export const connectDB=async()=>{
    try {
        const instance=await mongoose.connect(`${process.env.MONGODB_URI}/${mongodbName}`)
        console.log('mongodb connect successfully',instance.connection.host);
    } catch (error) {
        console.log('mongodb connection failed',error);
    }
}