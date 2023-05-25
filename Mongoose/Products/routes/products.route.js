const express=require('express');
const router=express.Router();
const productSchema=require('../Schemas/products.schemas');
const mongoose=require('mongoose');
const product=mongoose.model('product',productSchema);
//get multiple
router.get('/',async(req,res)=>{
    try{
       const result= await product.find({}).exec()
       res.status(200).json({message:"find successfully",result})
    }catch(err){
        res.status(500).json({error:"server side error"})
    }
    
    
})
//get only one 
router.get('/:id',async(req,res)=>{
   try{
    const result=await product.findOne({_id:req.params.id})
    res.status(200).json({message:"find successfully",result})
   }catch(err){
    res.status(500).json({error:"server side error"})
   }
})
//insert multiple data
router.post('/all',async(req,res)=>{
   try{
    const products= await product.insertMany(req.body)
    res.status(200).json({message:"post multiple successfully",products})
   }catch(err){
    res.status(500).json({error:"server side error"})
   }
})
//insert only one data
router.post('/',async(req,res)=>{
    try{
        const newProduct=new product(req.body);
        await newProduct.save()
        res.status(200).json({message:"product add successfully",newProduct})
    }
    catch(err){
       res.status(500).json({error:"server side error"})
    } 
})
//update only one data
router.put('/:id',async(req,res)=>{
    try{
        const result=await product.updateOne({_id:req.params.id},{name:"macbook 2"})
        res.status(200).json({message:"product update successfully",result})
    }
    catch(err){
       res.status(500).json({error:"server side error"})
    } 
})
//delete only one data
router.delete('/:id',async(req,res)=>{
    try{
        const result=await product.deleteOne({_id:req.params.id})
        res.status(200).json({message:"product delete successfully",result})
    }
    catch(err){
       res.status(500).json({error:"server side error"})
    } 
})

module.exports=router;