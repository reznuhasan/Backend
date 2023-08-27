require('dotenv').config();
const serverPort=process.env.PORT || 5000
const mongodbPort=process.env.mongoDb
const secret_key=process.env.secret_key
module.exports={serverPort,mongodbPort,secret_key}