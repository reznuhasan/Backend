const express=require('express');
const { allProducts, newProducts,updateProduct, deleteProduct} = require('../controllers/product.controllers');
const router=express.Router();

router.get('/products',allProducts)
router.post('/products',newProducts)
router.put('/products/:id',updateProduct)
router.delete('/products/:id',deleteProduct)
module.exports=router;