const { default: mongoose } = require("mongoose");
const { mongoURL } = require("../secret");

const connectDB=async(options={})=>{
    try{
        await mongoose.connect(mongoURL,options);
        console.log("database connect successfully")

        mongoose.connection.on('error',(error)=>{
            console.error('db connection error')
        })
    }catch(err){
        mongoose.connection.on('error',(error)=>{
            console.error('database could not connected')
        })
    }
}
module.exports={connectDB}