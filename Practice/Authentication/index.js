const app=require('./app/app');
const mongoose=require('mongoose');
const { serverPort, mongodbPort } = require('./config/config');
const port=serverPort
main().catch(err => console.log(err));
async function main() {
    await mongoose.connect(mongodbPort);
    console.log('mongoose is connected')
    app.listen(port,()=>{
        console.log(`server running successfully at http://localhost:${port}`)
    })
}

