const mongoose=require('mongoose');
const {Schema}=mongoose;

const appointSchema=new Schema({
    patientId:{
        type:Number,
        required:true,
    },
    patientName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        required:true,
    },
    number:{
        type:String,
        required:true,
    },
    doctorName:{
        type:String,
        required:true,
    },
    hospitalName:{
        type:String,
        required:true,
    },
    location:{
        type:String,
        required:true,
    },
    orderTime:{
        type:String,
        required:true,
    },
    serialTime:{
        type:String,
        required:true,
    },
    serialNumber:{
        type:Number,
        required:true,
    },
    payment:{
        type:Number,
        required:true,
    }
})

const appointmentModel=mongoose.model('appointment',appointSchema);

module.exports=appointmentModel;