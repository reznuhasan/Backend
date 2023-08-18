
const Doctor=require('../Models/doctorModel')

const getAllDoctor=async(req,res)=>{
    try{
       const allDoctor=await Doctor.find({})
       res.status(202).json({"message":"doctors get successfully",allDoctor})
    }catch(err){
      res.status(500).json({ error: 'Error getting doctor' });
    }
}
const getOneDoctor=async(req,res)=>{
  try{
    const oneDoctor=await Doctor.findOne({name:req.params.name})
    res.status(202).json({"message":"doctor get successfully",oneDoctor})
  }catch(err){
    res.status(500).json({ "error": 'Error getting doctor' });
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
      return res.status(201).json(savedDoctor);
    } catch (err) {
      console.error('Error saving doctor:', err);
      res.status(500).json({ error: 'Error saving doctor' });
    }
};
const searchDoctor = async (req, res) => {
  try {
    const searchKey = new RegExp(req.params.key, 'i');

    const result = await Doctor.find({
      $or: [
        { name: { $regex: searchKey } },
        { qualification: { $regex: searchKey } },
        { category: { $regex: searchKey } },
        { 'hospitals.name': { $regex: searchKey } }, // Search by hospital name
      ],
    });

    res.status(200).json(result);
  } catch (err) {
    console.error('Error searching doctor:', err);
    res.status(500).json({ error: 'Error searching doctor' });
  }
};
const changeSerialNumber = async (req, res) => {
  try {
      const { doctorId } = req.params;
      const { hospitalIndex, newSerials } = req.body;

      const findDoctor = await Doctor.findOne({ _id: doctorId });
      
      if (!findDoctor) {
          return res.status(404).json({ error: "Doctor not found" });
      }
      
      findDoctor.hospitals[hospitalIndex].serials = newSerials;
      await findDoctor.save();

      return res.status(202).json({ message: "Serials updated successfully" });
  } catch (err) {
      return res.status(500).json({ error: "Error updating doctor serials" });
  }
};


module.exports={getAllDoctor,addDoctor,searchDoctor,getOneDoctor,changeSerialNumber}