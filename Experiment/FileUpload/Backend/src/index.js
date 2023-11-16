import app from "./app.js";
import connectDB from "./db/MongoConnect.js";

const port=process.env.PORT;

connectDB()
.then(()=>{
    app.listen(port,()=>{
        console.log(`server running successfully at http://localhost:${port}`)
    }) 
})
.catch(error=>
    {
        console.log("Mongodb connection failed")
    }
)
