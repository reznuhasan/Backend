const express=require('express');
const userRouter=require('./routes/user.route');
const cors=require('cors');
const app=express();
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())
// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/DemoProject');
  console.log('mongodb connect successfully')
}
app.use('/user',userRouter);
app.get('/',(req,res)=>{
    res.send('welcome from my website')
})
module.exports=app;