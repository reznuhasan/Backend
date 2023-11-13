import express from "express"

const app=express();

app.get('/',(_req,res)=>{
    res.send('Welcome you from our database connection');
})

export default app;