const express=require('express');
const studentRouter=require('./routes/student.route')
const app=express();
const mongoose=require('mongoose');
const cors=require('cors');
app.use(cors());
app.use(express.urlencoded({extended:true}))
app.use(express.json());
main().catch(err=>console.log(err))
async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/School')
    console.log('mongodb connect successfully')
}

//router connection
app.use('/student',studentRouter);


app.get('/',(req,res)=>{
    res.send('<h1>Welcome to my School Api</h1>')
})
app.use('*',(req,res)=>{
    res.status(404).json({message:"wrong url"})
})
app.use((err,req,res,next)=>{
    res.status(500).json({message:"server side error"})
})
module.exports=app;