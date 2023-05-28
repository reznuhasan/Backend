
const showAllStudents=(req,res)=>{
    res.send('<h1>show all students</h1>')
}
const showRegister=(req,res)=>{
    res.sendFile('D:/riznu/Backend/REST API/School-API/views/register.html')
}



module.exports={showAllStudents,showRegister}