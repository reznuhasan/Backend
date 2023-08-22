const express=require('express');
const buildMiddleware = require('./middleware');
const appRouter=require('./routes');
const { resourseHandler, serverHandler } = require('./errors');
const app=express();
app.use(buildMiddleware)
app.use(appRouter);
app.use(resourseHandler);
app.use(serverHandler);
module.exports=app;