const fs=require('fs');

fs.writeFileSync('demo1.txt','Ami tomay BhaloBashe!.')
fs.appendFileSync('demo1.txt',' Tumi ki amar hashe mukher karon hobe?')

fs.readFile('demo1.txt',(err,data)=>{
    console.log(data.toString())
})