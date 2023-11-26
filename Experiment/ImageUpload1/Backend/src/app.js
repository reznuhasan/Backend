import bodyParser from "body-parser";
import express from "express";
import constantRouter from "./routes/constant.route.js"
const app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

app.use(constantRouter);
app.get('/',(req,res)=>{
    res.send('api working fine')
})

export default app;