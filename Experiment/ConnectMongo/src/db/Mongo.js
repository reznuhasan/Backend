import mongoose from "mongoose";
import { databaseName } from "../constants.js";
import dotenv from 'dotenv';
dotenv.config({
    path:'./env'
})

const connectDB=async()=>{
    try {
        const connectionIntance=await mongoose.connect(`${process.env.MONGODB_URI}/${databaseName}`)
        console.log('MongoDB Connected: Host-',connectionIntance.connection.host)
    } catch (error) {
        console.log('MongoDB connection is Failed',error)
        process.exit(1);
    }
}

export default connectDB;