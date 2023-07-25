
const Doctor=require('../Models/doctorModel')

const getAllDoctor=async(req,res)=>{
    try{
       const allDoctor=await Doctor.find({})
       res.status(202).json({"message":"doctor get successfully",allDoctor})
    }catch(err){
      res.status(500).json({ error: 'Error getting doctor' });
    }
}
const addDoctor = async (req, res) => {
    try {
      const allDoctor=await Doctor.find({});
      const Id=(allDoctor.length===0)?101:allDoctor.length+101
      const doctorData=req.body;
      const newDoctorData={
        name: req.body.name,
        image: req.file.filename, // Save the image file path in the database (including the "router" folder)
        qualification: req.body.qualification,
        category: req.body.category,
        fees: req.body.fees,
        hospitals: req.body.hospitals,
        doctorId:Id,
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
const searchDoctor = async (req, res) => {
  try {
    const result = await Doctor.find({
      "$or": [
        { name: { $regex: req.params.key } },
        { qualification: { $regex: req.params.key } },
        { category: { $regex: req.params.key } },
        { 'hospitals.name': { $regex: req.params.key } }, // Search by hospital name
      ],
    });
    res.status(200).json(result);
  } catch (err) {
    console.error('Error searching doctor:', err);
    res.status(500).json({ error: 'Error searching doctor' });
  }
};
module.exports={getAllDoctor,addDoctor,searchDoctor}