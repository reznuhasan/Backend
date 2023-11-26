import express from "express";
import cors from "cors"
import bodyParser from "body-parser";
import constantRouter from "./routes/constant.route.js"
const app=express();
app.use(bodyParser.json())
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}))
app.use(constantRouter);
app.get('/',(_req,res)=>{
    res.send("Hello World");
})

export default app;