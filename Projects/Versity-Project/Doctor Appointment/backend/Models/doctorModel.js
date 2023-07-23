const mongoose=require('mongoose')
const { Schema } = mongoose;

const doctorSchema=new Schema({
    userId:{
        type:Number,
        required:true,
        unique:true,
    },
    name:{
        type:String,
        required:true,
    },
    qualification:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    fees:{
       type:Number,
       required:true,
    },
    hospitals:[{
        name:{
            type:String,
            required:true,
        },
        location:{
           type:String,
           required:true,
        },
        timeSlots:[
            {
                day:{
                    type:String,
                    required:true,
                },
                startTime:{
                    type:Date,
                    required:true,
                },
                endTime:{
                    type:Date,
                    required:true,
                }
            }
        ],
        serials:{
            type:Number,
            required:true,
        }
    }]
})

const doctorModel=mongoose.model('doctor',doctorSchema);

module.exports=doctorModel;