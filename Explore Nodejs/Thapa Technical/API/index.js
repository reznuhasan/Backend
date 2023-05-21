const http=require('http');
const fs=require('fs');
const { dirname } = require('path');
const { stringify } = require('querystring');
const port=8080
const app=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.writeHead(200,{'content-type':'text/html'});
        res.end('<h1>This is my Home Page</h1>');
    }else if(req.url==='/userapi'){
        fs.readFile(`${__dirname}/userApi.json`,'utf-8',(err,data)=>{
            const users=JSON.parse(data)
            res.end(users[1].name)
        })
    }else{
        res.writeHead(404,{'content-type':'text/html'});
        res.end('<h1>404 error,Page is not found</h1>')
    }
})

app.listen(port,()=>{
    console.log(`server running successfully at http://localhost:${port}`)
})