
const Doctor=require('../Models/doctorModel')

const getAllDoctor=(req,res)=>{
    try{
       res.send('get all doctor')
    }catch(err){

    }
}
const addDoctor = async (req, res) => {
    try {
      const allDoctor=await Doctor.find({});
      const Id=(allDoctor.length===0)?101:allDoctor.length+101
      const doctorData=req.body;
      const newDoctorData={
        doctorId:Id,
        ...doctorData,
      }
      const newDoctor = new Doctor(newDoctorData);
      const savedDoctor = await newDoctor.save();
      console.log('Doctor saved successfully:', savedDoctor);
      return res.status(201).json(savedDoctor);
    } catch (err) {
      console.error('Error saving doctor:', err);
      res.status(500).json({ error: 'Error saving doctor' });
    }
};

module.exports={getAllDoctor,addDoctor}