const app=require('./app');
const port=2000;

app.listen(port,()=>{
    console.log(`server running successfully at http://localhost:${port}`)
})