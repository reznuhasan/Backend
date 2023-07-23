import axios from 'axios';
import React, { useState } from 'react'

const AddDoctor = () => {
    const [doctorData, setDoctorData] = useState({
        name: '',
        image: '', // This will hold the URL or file path of the image
        qualification: '',
        category: '',
        fees: '',
        hospitals: [],
    });
    const [hospitalData,setHospitalData]=useState({
            name: '',
            location: '',
            timeSlots: [],
            serials: '',
    })
    const [timeData,setTimeData]=useState({
        day: '',
        startTime: '',
        endTime: '',
    },)
    const handleInputChange = (e) => {
        const {name,value}=e.target;
        setDoctorData((prevData)=>({
            ...prevData,
            [name]:value,
        }));
    }
    const handleImageChange = (e) => {
        const imageFile = e.target.files[0]
        const reader = new FileReader();

        reader.onloadend = () => {
            setDoctorData(prevData => ({
                ...prevData,
                image: reader.result

            }))
        }
        if (imageFile) {
            reader.readAsDataURL(imageFile);
        }
    }
    const handleHospitalData=(e)=>{
        const {name,value}=e.target;
        setHospitalData((prevData)=>({
            ...prevData,
            [name]:value,
        }))
    }
    const handleTimeSlot=(e)=>{
        const {name,value}=e.target;
        setTimeData((prevData)=>({
            ...prevData,
            [name]:value,
        }))
    }
    const handleSubmit=(e)=>{
      e.preventDefault();
      hospitalData.timeSlots.push(timeData)
      doctorData.hospitals.push(hospitalData)
      axios.post('http://localhost:5000/api/doctors/add', doctorData)
      .then((response) => {
        console.log('Doctor data saved:', response.data);
      })
      .catch((error) => {
        console.error('Error saving doctor data:', error);
      });
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={doctorData.name} onChange={handleInputChange} placeholder='enter doctor name'/>
                <input type="file" name="image" onChange={handleImageChange} />
                <input type="text" name="qualification" value={doctorData.qualification} onChange={handleInputChange} placeholder='enter doctor qualification'/>
                <input type="text" name="category" value={doctorData.category} onChange={handleInputChange} placeholder='enter doctor category'/>
                <input type="number" name="fees" value={doctorData.fees} onChange={handleInputChange} placeholder='enter doctor fees'/>
                
                {/* hospital side data */}
                <input type="text" name="name" value={hospitalData.name} onChange={handleHospitalData} placeholder='enter hospital name'/>
                <input type="text" name="location" value={hospitalData.location} onChange={handleHospitalData} placeholder='enter hospital location'/>
                <input type="number" name="serials" value={hospitalData.serials} onChange={handleHospitalData} placeholder='enter total serials'/>

                {/* set time slot part */}
                <input type="text" name="day" value={timeData.day} onChange={handleTimeSlot} placeholder='enter day'/>
                <input type="time" name="startTime" value={timeData.startTime} onChange={handleTimeSlot} placeholder='enter start time'/>
                <input type="time" name="endTime" value={timeData.endTime} onChange={handleTimeSlot} placeholder='enter end time'/>
                {/* Button to submit the form */}
                <button type="submit">Save Doctor</button>
            </form>

        </div>
    )
}

export default AddDoctor;