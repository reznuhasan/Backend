import express from "express"
const app=express();
import userRouter from "./routes/user.route.js"

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('public'))



app.use('/api/v1/user',userRouter);

app.get('/',(req,res)=>{
    res.send("welcome to my website");
})

export default app;