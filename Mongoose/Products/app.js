const express=require('express');
const app=express();
const mongoose=require('mongoose');
const productRouter=require('./routes/products.route')
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');
  console.log('database connect successfully')
}
app.use(express.json())
app.use('/product',productRouter);
app.get('/',(req,res)=>{
    res.send('welcome you from my sight')
})

module.exports=app;