import app from "./app.js";
import { connectDB } from "./db/mongo.db.js";

const port=process.env.PORT || 9000


connectDB()
.then(()=>{
    app.listen(port,()=>{
        console.log(`server running successfully at http://localhost:${port}`)
    })
})
.catch(err=>{
    console.log('Mongo DB connection Failed',err);
})