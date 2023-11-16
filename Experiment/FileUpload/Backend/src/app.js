import express from "express"

import userRouter from "./routes/user.route.js"
import cors from "cors";
import bodyParser from "body-parser";
const app=express();
app.use(cors())
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));




app.use('/api/v1/user',userRouter);

app.get('/',(req,res)=>{
    res.send("welcome to my website");
})

export default app;