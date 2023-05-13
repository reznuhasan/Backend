const http=require('http');
const port=5000;
const hostName='127.0.0.1';
const server=http.createServer((req,res)=>{
   
    if(req.url==='/'){
        res.setHeader("Content-Type", "text/html");
        res.write('<li><a href="/">Home</a></li>')
        res.write('<li><a href="/about">About</a></li>')
        res.write('<li><a href="/contact">Contact</a></li>')
        res.write('<h1>This is my Home Page</h1>');
        res.end();
    }else if(req.url==='/about'){
        res.setHeader("Content-Type", "text/html");
        res.write('<li><a href="/">Home</a></li>')
        res.write('<li><a href="/about">About</a></li>')
        res.write('<li><a href="/contact">Contact</a></li>')
        res.write('<h1>This is About Page</h1>');
        res.end();
    }else if(req.url==='/contact'){
        res.setHeader("Content-Type", "text/html");
        res.write('<li><a href="/">Home</a></li>')
        res.write('<li><a href="/about">About</a></li>')
        res.write('<li><a href="/contact">Contact</a></li>')
        res.write('<h1>This is Contact Page</h1>');
        res.end();
    }else{
        res.setHeader("Content-Type", "text/html");
        res.write('<h1>Page is Not Found</h1>');
        res.end();
    }
})

server.listen(port,hostName,()=>{
    console.log(`server is running successfully at http://${hostName}:${port}`)
})