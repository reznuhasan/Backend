

const uploadImage =async(req,res)=>{
    try {
        console.log(req.file.path);
        res.status(200).json({"message":"image upload successful"});
    } catch (error) {
        res.status(500).json({"message":"server side error"})
    }
}

export {uploadImage}