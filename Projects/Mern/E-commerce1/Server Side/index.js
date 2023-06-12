const { connectDB } = require('./Config/db');
const app=require('./app');
const {port}=require('./secret')

app.listen(port,async()=>{
    console.log(`server running successfully at http://localhost:${port}`);
    await connectDB();
})