
const resourseHandler=(_req,_res,next)=>{
    const error=new Error("Resource not Found");
    error.status=404;
    next(error)
}

const serverHandler=(error,_req,res,_next)=>{
    if(error.status===404){
        return res.status(error.status).json({
            message:error.message
        })
    }

    res.status(500).json({message:"Something went wrong"})
}

module.exports={resourseHandler,serverHandler}