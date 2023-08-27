const express=require('express');
const app=express();
const appRouter=require('./routes');
const { pageError, serverError } = require('./error');
const { appMiddleWare } = require('./middleware');
const authRouter=require('../Routes/authRoute');
const userRouter=require('../Routes/userRoute')
app.use(appMiddleWare)
app.use(appRouter)
app.use('/api/v1/auth',authRouter)
app.use('/api/v1/users',userRouter)
app.use(pageError)
app.use(serverError)
module.exports=app;