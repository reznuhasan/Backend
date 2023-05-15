const app=require('./app');
const port=3001;

app.listen(port,()=>{
    console.log(`server successfully running at http://localhost:${port}`)
})