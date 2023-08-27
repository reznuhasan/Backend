const  mongoose = require("mongoose");

const studentSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:[3,"use more than 3 characters"],
        maxlength:[15,"use less than 15 characters"],
    },
    email:{
        type:String,
        required:true,
        validate:{
            validator:function(v){
                const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
                return emailPattern.test(v)
            },
            message: props => `${props.v} is not a valid email address`
        }
    },
    password:{
        type:String,
        required:true,
        minlength:[6,"password must be more than 5 characters"],
    },
    role:{
        type:[String],
        enum:["Student","Teacher","Admin"],
        required:true,
        default:["Student"],
    },
    activeStatus:{
        type:String,
        enum:["Pending","Active","Rejected"],
        required:true,
        default:"Pending"
    }
})

const studentModel=mongoose.model("Student",studentSchema);

module.exports=studentModel;