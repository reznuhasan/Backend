const app=require('./app')
const { serverPort } = require('./config/userConfig')
const port=serverPort;

app.listen(port,()=>{
    console.log(`server running successfully at http://localhost:${port}`)
})