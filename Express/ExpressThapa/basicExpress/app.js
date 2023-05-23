const express=require('express');
const userRouter=require('./routes/users.route')
const app=express();
app.use(express.static('public'))
app.use('/user',userRouter)
app.get('/',(req,res)=>{
    res.sendFile(`${__dirname}/views/index.html`)
})
module.exports=app;