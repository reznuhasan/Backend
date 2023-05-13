const http=require('http');

//for create server
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.write('Hello Rizwan!');
        res.write('What are you doing?');
        res.end();
    }else if(req.url==='/about-us'){
        res.write('This is about us page');
        res.end();
    }else{
        res.write('Page are not Found');
        res.end();
    }
});


server.listen(3000);

console.log('listening on port 3000')