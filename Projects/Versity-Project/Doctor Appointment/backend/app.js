const express=require('express');
const app=express();
const docterRouter=require('./router/doctorRoutes');

app.use(express.json())
app.use(express.urlencoded({extended:true}))

const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/HelloDoctor');
  console.log('mongoose connect successfully');
}

app.use('/api/doctors',docterRouter)

app.get('/',(req,res)=>{
    res.send('hello from other side')
})
app.use((req,res,next)=>{
    res.status(404).send('404 error,page not found');
})
app.use((err,req,res,next)=>{
    res.status(500).send('server side error');
})
module.exports=app;