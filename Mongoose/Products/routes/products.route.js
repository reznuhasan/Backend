const express=require('express');
const router=express.Router();
const productSchema=require('../Schemas/products.schemas');
const mongoose=require('mongoose');
const product=mongoose.model('product',productSchema);
//get multiple
router.get('/',async(req,res)=>{
    await product.find({}).exec()
    .then(result=>res.status(200).json({message:"find successfully",result}))
    .catch(err=>res.status(500).json({error:"server side error"}))
})
//get only one 
router.get('/:id',async(req,res)=>{
    await product.findOne({_id:req.params.id}).exec()
    .then(result=>res.status(200).json({message:"findOne successfully",result}))
    .catch(err=>res.status(500).json({error:"server side error"}))
})
//insert multiple data
router.post('/all',async(req,res)=>{
    await product.insertMany(req.body)
    .then(result=>res.status(200).json({message:"insert successfully",result}))
    .catch(err=>res.status(500).json({error:"server side error"}))
})
//insert only one data
router.post('/',async(req,res)=>{
    try{
        const newProduct=new product(req.body);
        newProduct.save()
        res.status(200).json({message:"product add successfully",newProduct})
    }
    catch(err){
       res.status(500).json({error:"server side error"})
    } 
})
//update only one data
router.put('/:id',async(req,res)=>{
    await product.updateOne({_id:req.params.id},{name:"macbook 2"})
    .then((result)=>res.status(200).json({message:"UpdateOne successfully",result}))
    .catch(err=>res.status(500).json({error:"server side error"}))
})
//delete only one data
router.delete('/:id',async(req,res)=>{
    await product.deleteOne({_id:req.params.id})
    .then((result)=>res.status(200).json({message:"deleteOne successfully",result}))
    .catch(err=>res.status(500).json({error:"server side error"}))
})

module.exports=router;