const fs=require('fs');
let data = "This is a file containing a collection of books.";
fs.writeFile('demo.txt',data,(err)=>{
     if(err){
        console.log('There is something wrong');
        console.log(err)
     }else{
        console.log('File create successfully')
     }
})
fs.appendFile('demo.txt',' This Books name is Hablu-Bablu',err=>{
    if(err){
        console.log('There is something wrong');
        console.log(err)
     }else{
        console.log('File create successfully')
     }
})

fs.readFile('demo.txt','utf8',(err,data)=>{
    console.log(data)
})
fs.renameSync('demo.txt','myFile.txt');