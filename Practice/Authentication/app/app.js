const express=require('express');
const app=express();
const appRouter=require('./routes');
const { pageError, serverError } = require('./error');
const { appMiddleWare } = require('./middleware');
const allRoutes=require('../Routes/index')
app.use(appMiddleWare)
app.use(appRouter)
app.use(allRoutes);
app.use(pageError)
app.use(serverError)
module.exports=app;