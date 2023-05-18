const express=require('express');
const app=express();
const useRouter=require('./routes/products.route.js')

app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.send('<h1>Welcome to My Products REST API');
})
app.use(useRouter)
app.use((req,res,next)=>{
    res.status(404).json({
        message:'wrong route search'
    })
})
app.use((err,req,res,next)=>{
    res.status(500).json({
        message:"something wrong",
        error:err
    })
})
module.exports=app;