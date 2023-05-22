const http=require('http');
const fs=require('fs');
const port=3000;

const server=http.createServer();

server.on('request',(req,res)=>{
    const rstream=fs.createReadStream('demo.txt');
    rstream.pipe(res)
    // rstream.on('data',(chunkdata)=>{
    //     res.write(chunkdata)
    // })
    // rstream.on('end',()=>{
    //     res.end();
    // })
    // rstream.on('error',(err)=>{
    //     console.log(err);
    //     res.end('File is not found')
    // })
})

server.listen(port,()=>{
    console.log(`server running successfully at http://localhost:${port}`)
})

