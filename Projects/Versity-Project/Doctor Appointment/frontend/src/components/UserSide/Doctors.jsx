import axios from 'axios';
import React, { useEffect, useState } from 'react';
import imageUrl from "../../assets/react.svg"
const Doctors = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/doctors');
        setDoctors(response.data.allDoctor);
      } catch (error) {
        console.error('Error fetching doctors:', error);
      }
    };

    fetchDoctors();
  }, []);

  return (
    <div>
      {doctors.map((doctor) => (
        <div key={doctor._id}>
          <img src={`/src/assets/${doctor.image}`} alt="" />
          {console.log(imageUrl,`/src/assets/${doctor.image}`)
          
          }
          <h2>{``}</h2>
          <p>Qualification: {doctor.qualification}</p>
          <p>Category: {doctor.category}</p>
        </div>
      ))}
    </div>
  );
};

export default Doctors;
