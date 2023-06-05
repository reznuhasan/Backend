const express=require('express');
const app=express();
const cors=require('cors');
const mongoose=require("mongoose");
const mobileRouter=require('./routes/mobile.route');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))
//connect mongoose
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/MOBILEAPI');
  console.log("server connect successfully");
}

app.use('/mobile',mobileRouter);
app.get('/',(req,res)=>{
    res.send("Welcome to my rest api");
})

module.exports=app;
