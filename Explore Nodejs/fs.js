const fs=require('fs')

fs.writeFileSync('myFile.txt','Hello Programmers');
fs.appendFileSync('myFile.txt'," Hello Rizwan")
// fs.readFile('myFile.txt','utf-8',function(err,data){
// console.log(data)
// })

const data=fs.readFileSync('myFile.txt')

console.log(data.toString())