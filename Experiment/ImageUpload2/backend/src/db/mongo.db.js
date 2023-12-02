import mongoose from "mongoose";
import { MONGODB_NAME } from "../constant.js";

export const connectMongoDB=async()=>{
    try {
        const intance = await mongoose.connect(`${process.env.MONGODB_URI}/${MONGODB_NAME}`)
        console.log(`MongoDB Connect Successfully.HOST:-`,intance.connection.host)
    } catch (error) {
        console.log('Mongo db connection failed')
    }
}