const express=require('express');
const cors=require('cors');
const morgan=require('morgan');

const buildMiddleware=[express.json(),cors(),morgan('dev')]

module.exports=buildMiddleware;