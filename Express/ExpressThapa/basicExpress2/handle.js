
const handle=(req,res)=>{
    console.log(req.app.locals.title)
    res.send('Hello from my server')
}
module.exports=handle;