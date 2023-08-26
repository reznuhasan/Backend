const express=require('express');
const app=express();
const appRouter=require('./routes');
const { pageError, serverError } = require('./error');
const { appMiddleWare } = require('./middleware');

app.use(appMiddleWare)
app.use(appRouter)
app.use(pageError)
app.use(serverError)
module.exports=app;