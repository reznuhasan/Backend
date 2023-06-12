const express=require('express');
const app=express();
const cors=require('cors');
const morgan=require("morgan");
const createError = require('http-errors')
const rateLimit = require('express-rate-limit')
const userRouter=require('./routers/userRouter')

const limiter=rateLimit({
    windowMs:1*60*1000,
    max:5,
    message:"Too many request from this IP.Please try again later",
    standardHeaders:true,
    legacyHeaders:false

})

app.use(limiter)
app.use(morgan("dev"))
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use('/api/users',userRouter);
app.get('/',(req,res)=>{
    res.statusCode=200
    res.send("Hello From other sides")
})


//client side error
app.use((req,res,next)=>{
    next(createError(404,"page not found"));
})

//server side error
app.use((err,req,res,next)=>{
    return res.status(err.status || 500).json({
        success:false,
        message:err.message
    })
})

module.exports=app;