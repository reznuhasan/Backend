import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Doctor from './Doctor';
import styles from "../../styles/doctors.module.css"
import { Row } from 'react-bootstrap';
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
  const handleSearchValue = async (e) => {
    const key = e.target.value;
    try {
      const response = await axios.get(`http://localhost:5000/api/doctors/search/${key}`)
      setDoctors(response.data)
    } catch (error) {
      console.error('Error searching doctors:', error);
    }
  };
  return (
    <div className={styles.allDoctor}>
      <div className={styles.searchDoctor}>
         <input type="text" onChange={handleSearchValue} placeholder='search Doctor by name category qualification and hospitals'/>
      </div>
      <div>
        <Row xs={1} md={3} className="g-4">
          {
            doctors.map(doctor => <Doctor doctor={doctor} key={doctor._id} />)
          }
        </Row>
      </div>
    </div>
  );
};

export default Doctors;

