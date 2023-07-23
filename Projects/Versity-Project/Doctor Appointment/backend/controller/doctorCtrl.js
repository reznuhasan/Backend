
const Doctor=require('../Models/doctorModel')

const getAllDoctor=(req,res)=>{
    try{
       res.send('get all doctor')
    }catch(err){

    }
}
const addDoctor=async(req,res)=>{
    try{
       const allDoctor=await Doctor.find({});
       const id=(allDoctor.length===0)?101:101+allDoctor.length;
       const newDoctorData={
        ...req.body,
        userId:id,
       };
       const newDoctor=new Doctor(newDoctorData);
       await newDoctor.save((err,savedDoctor)=>{
        if (err) {
            console.error('Error saving doctor:', err);
            return res.status(500).json({ error: 'Error saving doctor' });
          } else {
            console.log('Doctor saved successfully:', savedDoctor);
            return res.status(201).json(savedDoctor);
          }
       })
    }catch(err){
        res.status(504).json('server side error for save doctor')
    }
}

module.exports={getAllDoctor,addDoctor}