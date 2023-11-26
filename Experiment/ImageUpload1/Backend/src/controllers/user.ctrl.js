

const registerUser=async(req,res)=>{
    try {
        const {name,email,password,profile}=req.body
    } catch (error) {
        res.status(400).json({error:"authentication error",error})
    }
}

export {registerUser}