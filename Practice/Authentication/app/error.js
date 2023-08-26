
const pageError=(_req,_res,next)=>{
    const error=new Error("page is not found");
    error.status=404;
    next(error)
}

const serverError=(error,_req,res,_next)=>{
    if(error.status===404){
        return res.status(error.status).json({
            message:error.message
        })
    }
    res.status(505).json({message:"Something went wrong"})
}

module.exports={pageError,serverError}