import axios from 'axios';
import React, { useState } from 'react';
import styles from '../../styles/addDoctor.module.css'

const AddDoctor = () => {
  const [doctorData, setDoctorData] = useState({
    name: '',
    image: null,
    qualification: '',
    category: '',
    fees: '',
    hospitals: [],
  });

  const [hospitalData, setHospitalData] = useState({
    name: '',
    location: '',
    timeSlots: [],
    serials: '',
  });

  const [timeData, setTimeData] = useState({
    day: '',
    startTime: '',
    endTime: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDoctorData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    setDoctorData((prevData) => ({
      ...prevData,
      image: imageFile,
    }));
  };

  const handleHospitalData = (e) => {
    const { name, value } = e.target;
    setHospitalData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleTimeSlot = (e) => {
    const { name, value } = e.target;
    setTimeData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddHospital = () => {
    // Add the current hospitalData and its timeSlots to the hospitals array in doctorData
    setDoctorData((prevData) => ({
      ...prevData,
      hospitals: [
        ...prevData.hospitals,
        {
          ...hospitalData,
          timeSlots: [timeData],
        },
      ],
    }));

    // Clear the hospitalData and timeData for the next hospital entry
    setHospitalData({
      name: '',
      location: '',
      serials: '',
    });

    setTimeData({
      day: '',
      startTime: '',
      endTime: '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    hospitalData.timeSlots.push(timeData)
    doctorData.hospitals.push(hospitalData)
    
    const formData = new FormData();
    formData.append('name', doctorData.name);
    formData.append('image', doctorData.image);
    formData.append('qualification', doctorData.qualification);
    formData.append('category', doctorData.category);
    formData.append('fees', doctorData.fees);

    // Append the hospitals data one by one
    for (let i = 0; i < doctorData.hospitals.length; i++) {
      const hospital = doctorData.hospitals[i];
      formData.append(`hospitals[${i}][name]`, hospital.name);
      formData.append(`hospitals[${i}][location]`, hospital.location);
      formData.append(`hospitals[${i}][serials]`, hospital.serials);

      // Append time slots data for each hospital
      for (let j = 0; j < hospital.timeSlots.length; j++) {
        const timeSlot = hospital.timeSlots[j];
        formData.append(`hospitals[${i}][timeSlots][${j}][day]`, timeSlot.day);
        formData.append(`hospitals[${i}][timeSlots][${j}][startTime]`, timeSlot.startTime);
        formData.append(`hospitals[${i}][timeSlots][${j}][endTime]`, timeSlot.endTime);
      }
    }

    axios
      .post('http://localhost:5000/api/doctors/add', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        console.log('Doctor data saved:', response.data);
        setDoctorData({
          name: '',
          image: null,
          qualification: '',
          category: '',
          fees: '',
          hospitals: [],
        });
        setHospitalData({
          name: '',
          location: '',
          serials: '',
        });
    
        setTimeData({
          day: '',
          startTime: '',
          endTime: '',
        });
        alert("Doctor add Successfully")

      })
      .catch((error) => {
        console.error('Error saving doctor data:', error);
      });
  };

  return (
    <div className={styles.addDoctor}>
      <h2 className={styles.title}>Add Doctor</h2>
      <div className={styles.formContainer}> 
      <form onSubmit={handleSubmit}>
      <legend>Doctor Information</legend>
        <input type="text" name="name" value={doctorData.name} onChange={handleInputChange} placeholder="enter doctor name"  className={styles.inputField} />
        <input type="file" name="image" onChange={handleImageChange}  className={styles.inputField}/>
        <input type="text" name="qualification" value={doctorData.qualification} onChange={handleInputChange} placeholder="enter doctor qualification"  className={styles.inputField} />
        <input type="text" name="category" value={doctorData.category} onChange={handleInputChange} placeholder="enter doctor category"  className={styles.inputField} />
        <input type="number" name="fees" value={doctorData.fees} onChange={handleInputChange} placeholder="enter doctor fees"  className={styles.inputField} />

        {/* hospital side data */}
        <input type="text" name="name" value={hospitalData.name} onChange={handleHospitalData} placeholder="enter hospital name"  className={styles.inputField}/>
        <input type="text" name="location" value={hospitalData.location} onChange={handleHospitalData} placeholder="enter hospital location"  className={styles.inputField}/>
        <input type="number" name="serials" value={hospitalData.serials} onChange={handleHospitalData} placeholder="enter total serials"  className={styles.inputField}/>

        {/* set time slot part */}
        <input type="text" name="day" value={timeData.day} onChange={handleTimeSlot} placeholder="enter day"  className={styles.inputField} />
        <input type="time" name="startTime" value={timeData.startTime} onChange={handleTimeSlot} placeholder="enter start time"  className={styles.inputField}/>
        <input type="time" name="endTime" value={timeData.endTime} onChange={handleTimeSlot} placeholder="enter end time"  className={styles.inputField}/>
        {/* Button to add hospital */}
        <button type="button" onClick={handleAddHospital} className={styles.button}>
          Add Hospital
        </button>
        {/* Button to submit the form */}
        <button type="submit" className={`${styles.button} ${styles.submitButton}`}>Save Doctor</button>
      </form>
    </div>
    </div>
  );
};

export default AddDoctor;
