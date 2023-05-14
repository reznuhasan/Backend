const express=require('express')
const router=express.Router();


router.get('/about',(req,res)=>{
    res.send('<h1>I am get a request at about route</h1>')
})
router.get('/register',(req,res)=>{
    res.send('<h1>I am get a request at register route</h1>')
})

module.exports=router;