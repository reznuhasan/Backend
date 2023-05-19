const fs=require('fs');

fs.writeFile('bio.txt','My Name is Rizwan',(err)=>{
    if(err){
        console.log('There something wrong in write File');
        console.log(err);
    }else{
        console.log('File create successfully');
    }
})
fs.appendFile('bio.txt','.I am reading University',(err)=>{
    if(err){
        console.log('There something wrong in append File');
        console.log(err);
    }else{
        console.log('add text successfully');
    }
})

fs.readFile('bio.txt','utf-8',(err,data)=>{
    if(err){
        console.log('There something wrong in read File');
        console.log(err);
    }else{
        console.log(data)
    }
})

fs.renameSync('bio.txt','myBio.txt')
fs.unlinkSync('myBio.txt');