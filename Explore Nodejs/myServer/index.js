const http=require('http');
const fs=require('fs');

const port=3000;
const hostName='127.0.0.1'
const handleFile=(file,res)=>{
    fs.readFile(file,(err,data)=>{
        res.write(data)
        res.end();
    })
}
const server=http.createServer((req,res)=>{
   if(req.url==='/'){
     handleFile('./home.html',res)
   }else if(req.url==='/about'){
    handleFile('./about.html',res)
   }else if(req.url==='/contact'){
    handleFile('./contact.html',res)
   }else{
    handleFile('./404.html',res)
   }
   
})

server.listen(port,hostName,()=>{
    console.log(`server is running successfully at http://${hostName}:${port}`)
})