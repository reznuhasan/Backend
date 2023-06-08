const express=require('express');
const app=express();
const cors=require('cors');
const mongoose=require('mongoose');
app.use(cors());
app.use(express.json);
app.use(express.urlencoded({extended:true}))

//connect mongoose
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/AutnPractice1');
  console.log("connect mongodb successfully")
}

app.get('/',(req,res)=>{
    res.status(200).send("Welcome to my authentication.")
})
module.exports=app;