import express from "express";
import bodyParser from "body-parser";
import rootRouter from "./routes/root.route.js"
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(rootRouter)
app.get('/', (req, res) => {
    res.send("welcome page create successfully")
})

export default app;