require('dotenv').config();
const port=process.env.PORT || 8000
const mongoURL=process.env.MONGO_ATLAS_URL || "mongodb://localhost:27017/ecommerceDB2023"
const defaultImagePath=process.env.DEFAULT_USER_IMAGE_PATH ||
'Public/images/users/default.jpg'
module.exports={port,mongoURL,defaultImagePath}
