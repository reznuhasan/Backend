const express=require('express');
const app=express();
const useRouter=require('./routes/users.route')
app.get('/',(req,res)=>{
    const id=req.header('id')
    const age=req.header('age')
    res.send(`<h1>Student age is=${age} and id=${id}</h1>`)
})
app.use(useRouter)
module.exports=app;