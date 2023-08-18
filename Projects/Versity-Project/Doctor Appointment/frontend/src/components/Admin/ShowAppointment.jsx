import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Appointment from './Appointment';

const ShowAppointment = () => {
    const [patients,setPatients]=useState([]);
    useEffect(()=>{
        const loadData=async()=>{
            const response=await axios.get("http://localhost:5000/api/appointment/all")
            setPatients(response.data.allPatients)
        }
        loadData();
    },[])
    console.log(patients)
  return (
    <div>
        <h1 className='text-center mt-2'>All Appointment</h1>
        {
            patients.map(patient=><Appointment patient={patient} key={patient.patientId}></Appointment>)
        }
    </div>
  )
}

export default ShowAppointment