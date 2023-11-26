import bodyParser from "body-parser";
import express from "express";

const app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.send('api working fine')
})

export default app;