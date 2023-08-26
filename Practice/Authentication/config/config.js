require('dotenv').config();
const serverPort=process.env.PORT || 5000
const mongodbPort=process.env.mongoDb
module.exports={serverPort,mongodbPort}