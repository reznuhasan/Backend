require('dotenv').config();
const port=process.env.PORT || 8000
const mongoURL=process.env.MONGO_ATLAS_URL || "mongodb://localhost:27017/ecommerceDB2023"

module.exports={port,mongoURL}
