import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";


export const connectDB=async ()=>{
    try {
        const instance=await mongoose.connect(`${process.env.MONGO_DB_URI}/${DB_NAME}`)
        console.log('mongodb connect successfully',instance.connection.host)
    } catch (error) {
        console.log("Mongodb connection failed");
        process.exit(1)
    }
}