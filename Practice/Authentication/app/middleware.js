const express=require('express')
const cors=require('cors')
const morgan=require('morgan')
const appMiddleWare=[express.json(),cors(),morgan('dev')]

module.exports={appMiddleWare}