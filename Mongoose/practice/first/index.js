const app=require('./app');
const { PORT } = require('./config/userConfig');
const port=PORT

app.listen(port,()=>{
    console.log(`server running successfully at http://localhost:${port}`)
})


