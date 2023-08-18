import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import styles from "../../styles/Doctor.module.css";
import { Link } from 'react-router-dom';

const Doctor = ({ doctor }) => {
  const { image, name, qualification, category, fees, hospitals } = doctor;
  console.log(doctor)
  return (
    <div>
      <Col>
        <Card>
          <Card.Img variant="top" src={`/src/assets/${image}`} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <div className={styles.doctorContent}>
              <span>Qualification: </span><p>{qualification}</p> {/* <-- Remove <p> element */}
            </div>
            <div className={styles.doctorContent}>
              <span>Category: </span><p>{category}</p> {/* <-- Remove <p> element */}
            </div>
            <div className={styles.doctorContent}>
              <span>Hospitals: </span><p>{hospitals[0].name}</p> {/* <-- Remove <p> element */}
            </div>
            <div className={styles.doctorContent}>
              <span>Time: </span><p>{hospitals[0].timeSlots[0].day} [{hospitals[0].timeSlots[0].startTime} to {hospitals[0].timeSlots[0].endTime}]</p> {/* <-- Remove <p> element */}
            </div>
            <div className={styles.doctorContent}>
              <h5 style={{ "color": "red" }}>Fees: ${fees}</h5> {/* <-- Use a different block-level element */}
            </div>
            <Button className={styles.btn}><Link to={`/doctors/${name}`} className={styles.btnText}>Make an Appointment</Link></Button>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Doctor;
