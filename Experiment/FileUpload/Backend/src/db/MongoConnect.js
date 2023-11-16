import mongoose from "mongoose";


const connectDB=async()=>{
    try {
        const response=await mongoose.connect(`${process.env.MONGO_DATABASE_URI}/${process.env.MONGO_DB_NAME}`)
        console.log("Mongodb connect Successfully Host:-",response.connection.host)
    } catch (error) {
        console.log("Mongo db connection failed",error);
    }
}

export default connectDB