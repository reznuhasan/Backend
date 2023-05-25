const app=require('./app');
const port=3001;

app.listen(port,()=>{
    console.log(`server running successfully at http://localhost:${port}`)
})