import mongoose,{Schema} from "mongoose";

const imageSchema = new Schema({
    profile:{
        type: 'string',
        required: true
    }
})

const IMAGE=mongoose.model('image',imageSchema)

export default IMAGE