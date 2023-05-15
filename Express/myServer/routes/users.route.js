const express=require('express');
const router=express.Router();

router.get('/about',(req,res)=>{
    res.send('this is about page');
})
router.get('/contact',(req,res)=>{
    res.send('this is contact page')
})
router.get('/help',(req,res)=>{
    res.send('this is help page')
})

module.exports=router;