const http=require('http');
const fs=require('fs');
const request=require('requests');
const port =3000;
const htmlFile=fs.readFileSync('index.html','utf-8');
const replaceValue=(tempVal,orgVal)=>{
    const kel=orgVal.main.temp;
    const minKel=orgVal.main.temp_min;
    const maxKel=orgVal.main.temp_max;
    const cel=(kel-273.15).toFixed(2);
    const minCel=(minKel-273.15).toFixed(2);
    const maxCel=(maxKel-273.15).toFixed(2);
    const city=orgVal.name;
    const country=orgVal.sys.country;
    const weather=orgVal.weather[0].main;
    let temperature=tempVal.replace("{%cel%}",cel);
    temperature=temperature.replace("{%minCel%}",minCel);
    temperature=temperature.replace("{%maxCel%}",maxCel);
    temperature=temperature.replace("{%location%}",city)
    temperature=temperature.replace("{%country%}",country)
    temperature=temperature.replace("{%weather%}",weather)
    return temperature;
}
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        request('https://api.openweathermap.org/data/2.5/weather?q=jessore&appid=9669e454720eb216e16504d7d9bc6f8d')
        .on('data', (chunk)=> {
          const objData=JSON.parse(chunk);
          const dataArr=[objData];
          const realTimeData=dataArr.map(val=>replaceValue(htmlFile,val)).join("");
          res.write(realTimeData)
        })
        .on('end', function (err) {
          if (err) return console.log('connection closed due to errors', err);
         
          res.end();
        })
        .on('error',(err)=>{
            console.log(err);
            res.end('404 Error,file is not found')
        })
        ;
        
    }
})

server.listen(port,()=>{
    console.log(`server running successfully at http://localhost:${port}`)
})