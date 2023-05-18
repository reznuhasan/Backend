const products=require('../models/models.product');
const {v4:uuidv4}=require('uuid')
// get products
exports.allProducts=(req,res)=>{
    res.status(200).json(products)
}

//create new products
exports.newProducts=(req,res)=>{
    const product={
        id:uuidv4(),
        name:req.body.name,
        price:req.body.price
    }
    products.push(product)
    res.status(200).json(products)
}

//update products
exports.updateProduct=(req,res)=>{
    const id=req.params.id;
    products.filter(product=>product.id===id).map(selected=>{
        selected.name=req.body.name;
        selected.price=req.body.price;
    })
    res.status(200).json(products);
}

//delete products
exports.deleteProduct=(req,res)=>{
    const id=req.params.id;
    products=products.filter(product=>product.id!==id);
    res.status(200).json(products)
}