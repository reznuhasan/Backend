const http=require('http');


const port=4000;
const hostname='127.0.0.1'
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.write('This is my Home Page');
        res.end();
    }else if(req.url==='/about'){
        res.write('This is About Page');
        res.end();
    }else{
        res.write('Page Not Found');
        res.end();
    }
})

server.listen(port,hostname,()=>{
    console.log(`server is running successfully at http://${hostname}:${port}`)
})
