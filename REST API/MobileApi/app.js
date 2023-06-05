const express=require('express');
const app=express();
const cors=require('cors');
const mongoose=require("mongoose");
app.use(cors());
app.use(express.json());
//connect mongoose
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/MOBILEAPI');
  console.log("server connect successfully");
}

app.use(express.urlencoded({extended:true}))
app.get('/',(req,res)=>{
    res.send("Welcome to my rest api");
})

module.exports=app;
