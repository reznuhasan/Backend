const fs=require('fs');
const http=require('http');
const port=8080;

const server=http.createServer()
server.on('request',(req,res)=>{
    // fs.readFile('demo.txt',(err,data)=>{
    //     if(err){
    //         console.log(err)
    //     }else{
    //         res.end(data.toString())
    //     }
    // })
    const rstream=fs.createReadStream('demo.txt');

    rstream.on('data',(chunkdata)=>{
        res.write(chunkdata);
    })
    rstream.on('end',()=>{
        res.end();
    })
    rstream.on('error',(err)=>{
        console.log(err);
        res.end('File Not Found')
    })
})
server.listen(port,()=>{
    console.log(`server running successfully at http://localhost:${port}`);
})