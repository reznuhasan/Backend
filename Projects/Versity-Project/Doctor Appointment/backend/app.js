const express=require('express');
const app=express();
const docterRouter=require('./router/doctorRoutes');
const userRouter=require('./router/userRoutes')
const appointmentRouter=require('./router/appointmentRoutes');
const cors=require('cors');


require('./config/passport')

app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(cors())
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/HelloDoctor');
  console.log('mongoose connect successfully');
}

app.use('/api/doctors',docterRouter)
app.use('/api/users',userRouter)
app.use('/api/appointment',appointmentRouter);
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