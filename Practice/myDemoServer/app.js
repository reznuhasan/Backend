const express=require('express');
const userRouter=require('./routes/user.route');
const cors=require('cors');
const app=express();
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

app.use('/user',userRouter);
app.get('/',(req,res)=>{
    res.send('welcome from my website')
})
module.exports=app;