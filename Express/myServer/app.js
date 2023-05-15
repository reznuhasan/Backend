const express=require('express');
const userRouter=require('./routes/users.route')
const app=express();

app.get('/',(req,res)=>{
    res.statusCode=200;
    res.sendFile(__dirname+'/views/index.html')
})
app.get('/register',(req,res)=>{
    // res.status(200).json({
    //     name:"Rizwan",
    //     statusCode:200
    // })
    // res.redirect('/api/user/about')
    res.statusCode=200;
    res.sendFile(__dirname+'/views/register.html')

})
app.use("/api/user",userRouter)
app.use((req,res)=>{
    res.send('404 Page Error')
})
module.exports=app;