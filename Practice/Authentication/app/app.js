const express=require('express');
const app=express();
const appRouter=require('./routes');
const { pageError, serverError } = require('./error');
const { appMiddleWare } = require('./middleware');
const studentRouter=require('../Routes/studentRoute');
app.use(appMiddleWare)
app.use(appRouter)
app.use('/api/v1/student',studentRouter)
app.use(pageError)
app.use(serverError)
module.exports=app;