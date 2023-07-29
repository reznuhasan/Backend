require('dotenv').config()
const serverPort=process.env.PORT || 8000;
const Secret_key=process.env.Secret_Key
module.exports={serverPort,Secret_key}