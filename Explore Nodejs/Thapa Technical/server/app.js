const http=require('http');
const port=8080;
const app=http.createServer((req,res)=>{
    if(req.url==='/about'){
        res.write('About page');
        res.end()
    }else if(req.url==='/'){
        res.write('Hello World');
        res.end()
    }else{
        res.writeHead(404,{'content-type' :'text/html'})
        res.write('<h1>404 error page,page does not exit</h1>');
        res.end();
    }
    
});
app.listen(port,()=>{
    console.log(`server running successfully at port http://localhost:${port}`)
})