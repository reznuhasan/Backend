import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from "../../styles/doctorDetails.module.css";
import { Button } from 'react-bootstrap';

const DoctorDetails = () => {
    const navigate = useNavigate();
    const [doctorData, setDoctorData] = useState({});
    const { name } = useParams();

    useEffect(() => {
        const loadDoctor = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/doctors/${name}`);
                setDoctorData(response.data.oneDoctor);
            } catch (err) {
                console.log("This doctor data not found");
            }
        };
        loadDoctor();
    }, [name]);

    return (
        <div>
            {doctorData.name && (
                <div className={styles.card}>
                    <div className="image">
                        <img src={`/src/assets/${doctorData.image}`} alt={doctorData.name} />
                    </div>
                    <div className={styles.content}>
                        <h2>{doctorData.name}</h2>
                        <p>Qualification: {doctorData.qualification}</p>
                        <p>Category: {doctorData.category}</p>
                        <p>Hospital: {doctorData.hospitals && doctorData.hospitals[0].name}</p>
                        <p>Location: {doctorData.hospitals && doctorData.hospitals[0].location}</p>
                        <p>Time: {doctorData.hospitals && doctorData.hospitals[0].timeSlots[0].day} [{doctorData.hospitals && doctorData.hospitals[0].timeSlots[0].startTime} to {doctorData.hospitals && doctorData.hospitals[0].timeSlots[0].endTime}]</p>
                        <h5 style={{ "color": "red" }}>Fees: ${doctorData.fees}</h5>
                        <Button className={styles.btn}>Make Your Appointment</Button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DoctorDetails;
