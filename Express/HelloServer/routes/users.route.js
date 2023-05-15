const express=require('express')
const router=express.Router();

router.get('/about',(req,res)=>{
    res.send('<h1>This is my about Page</h1>')
})

module.exports=router;