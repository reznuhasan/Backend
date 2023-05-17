const express=require('express')
const app=express();
const port=3000;
app.get('/products/:title([a-zA-Z]+)',(req,res)=>{
    res.send(`<h1>id = ${req.params.title}</h1>`)
})
app.get('/products/:id([0-9]+)',(req,res)=>{
    res.send(`<h1>id = ${req.params.id}</h1>`)
})
app.use('*',(req,res)=>{
    res.send('404 page error')
})
app.listen(port,()=>{
    console.log(`server successfully running at http://localhost:${port}`)
})