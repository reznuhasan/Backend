const customError = require('../Utiljs/error')
const pageError=(_req,_res,_next)=>{
    throw customError("page is not found",400)
}

const serverError=(err,_req,res,_next)=>{
    console.log(err)
    const message = err.message ? err.message : 'Server Error Occurred';
	const status = err.status ? err.status : 500;
    res.status(status).json(message)
}

module.exports={pageError,serverError}