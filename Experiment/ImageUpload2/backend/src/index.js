import app from "./app.js";
import { connectMongoDB } from "./db/mongo.db.js";

const port=process.env.PORT || 4000

connectMongoDB()
.then(()=>{
    app.listen(port,()=>{
        console.log(`server connect successfully at http://localhost:${port}`)
     })
})
.catch(err=>{
    console.log(`server connection failed`)
})
