const express=require('express');
const useRouter=require('./routes/users.route')
const app=express();
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/views/index.html')
})
app.get((req,res)=>{
    res.send('This is error page')
})
app.use(useRouter)
module.exports=app;