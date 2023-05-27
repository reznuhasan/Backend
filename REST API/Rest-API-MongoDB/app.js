const express=require('express');
const app=express();
const cors=require('cors');
const mongoose=require('mongoose');
const userRouter=require('./routes/users.route')
app.use(cors());
app.use(express.urlencoded({extended:true}))
app.use(express.json())

main().catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/portfolio');
    console.log('database connect successfully');
}

//connect router
app.use('/api/users',userRouter)
app.get('/',(req,res)=>{
    res.sendFile(`${__dirname}/views/index.html`)
})
app.use((err,req,res,next)=>{
    res.status(505).json({error:"server side error"})
})
app.use('*',(req,res)=>{
    res.status(404).json({error:"page not found"})
})


module.exports=app;