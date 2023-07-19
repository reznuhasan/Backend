const express=require('express');
const app=express();
const userRouter=require('./router/userRouter')
app.use(express.urlencoded({extended:true}))
app.use(express.json())

const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/DemoProject1');
  console.log('mongoose connect successfully')
}


app.use('/api/users',userRouter)
app.get('/',(req,res)=>{
    res.send('hello from other side')
})
app.use((req,res,next)=>{
    res.status(404).send('wrong url,page not found')
})

app.use((err,req,res,next)=>{
    res.status(500).send('server side error')
})

module.exports=app;