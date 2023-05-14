const app=require('./app')
const PORT=app.PORT;

app.app.listen(PORT,()=>{
    console.log(`server running successfully at http://localhost:${PORT}`)
})