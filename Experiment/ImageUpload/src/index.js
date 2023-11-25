import app from './app.js';

const port=process.env.PORT || 9000


app.listen(port,()=>{
    console.log(`server running successfully at http://localhost:${port}`);
})