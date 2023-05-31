const express=require('express');
const app=express();
const userRouter=require('./Modular/Users/route.user')
const mongoose=require('mongoose');
const cors=require('cors');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/MangoHat');
  console.log('mongodb connect successfully')
}
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api/user',userRouter);
app.get('/',(req,res)=>{
    res.send('welcome to mangohat');
})

module.exports=app;