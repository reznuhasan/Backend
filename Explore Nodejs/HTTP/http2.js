const http=require('http');
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.write('This is my home page')
        res.end()
    }else{
        res.write('Page is not Found')
        res.end();
    }
})

server.listen('8000');

console.log('listening on port 8000')