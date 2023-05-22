const http=require('http');
const fs=require('fs');

const port=3000;
const ourReadStream=fs.createReadStream(`${__dirname}/demo.txt`);

const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.write(`
        <html>
        <head>
        <title>form</title>
        </head>
        <body>
        <form action='/process' method="post">
        <input type="text" name="message"/>
        </form>
        </body>
        </htm>
        `)
    }else if(req.url==='/process' && req.method==='POST'){
        const body=[];
        req.on('data',(chunk)=>{
           body.push(chunk);
        });
        req.on('end',()=>{
            console.log('Streamed Finished');
            const paredBody=Buffer.concat(body).toString();
            console.log(paredBody)
            res.write('Thank you for response');
            res.end();
        });
        
    }

})

server.listen(port,()=>{
    console.log(`server running successfully at http://localhost:${port}`);
})
