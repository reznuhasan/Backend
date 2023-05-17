const app=require('./app')
require('dotenv').config();

const PORT=process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`server running successfully at http://localhost:${PORT}`)
})