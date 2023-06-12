const app=require('./app');
const {port}=require('./secret')

app.listen(port,()=>{
    console.log(`server running successfully at http://localhost:${port}`);
})