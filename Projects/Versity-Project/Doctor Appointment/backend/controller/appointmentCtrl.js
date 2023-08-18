const Appointment=require('../Models/appointmentModel');

const createAppointment=async(req,res)=>{
    try{
       const allAppointment=await Appointment.find({});
       const patientId=(allAppointment.length===0)?101:allAppointment.length+101;
       const newPatient=new Appointment({
        patientId:patientId,
        patientName:req.body.patientName,
        email:req.body.email,
        age:req.body.age,
        number:req.body.number,
        doctorName:req.body.doctorName,
        hospitalName:req.body.hospitalName,
        location:req.body.location,
        orderTime:req.body.orderTime,
        serialTime:req.body.serialTime,
        serialNumber:req.body.serialNumber,
        payment:req.body.payment,
       })
      const savedPatient= await newPatient.save();
      return res.status(201).json({"message":"patient saved successfully",savedPatient})
    }catch(err){
       return res.status(500).json({"error":"getting patient error"})
    }
}
const getAllPatient=async(req,res)=>{
    try{
        const allPatients=await Appointment.find({});
        return res.status(202).json({"message":"patients find successfully",allPatients});
    }catch(err){
        return res.status(500).json({"error":"getting patient errors",err});
    }
}

module.exports={createAppointment,getAllPatient}