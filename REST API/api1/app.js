const express=require('express');
const app=express();
const useRouter=require('./routes/users.route');
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(useRouter)
app.get('/',(req,res)=>{
    res.send('<h1>Welcome to my REST API</h1>')
})
app.use((req,res)=>{
    res.status(200).json({
        message:'wrong url search'
    })
})
module.exports=app;