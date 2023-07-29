import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'
import styles from "../../styles/Doctor.module.css"
import { Link } from 'react-router-dom';
const Doctor = ({ doctor }) => {
    console.log(doctor);
    const { image, name, qualification, category, fees, hospitals } = doctor
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={`/src/assets/${image}`} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            <div className={styles.doctorContent}>
                                <span>Qualification : </span>&nbsp;<p>{qualification}</p>
                            </div>
                            <div className={styles.doctorContent}>
                                <span>Category : </span>&nbsp;<p>{category}</p>
                            </div>
                            <div className={styles.doctorContent}>
                                <span>Hospitals : </span>&nbsp;<p>{hospitals[0].name}</p>
                            </div>
                            <div className={styles.doctorContent}>
                                <span>Time : </span>&nbsp;<p>{hospitals[0].timeSlots[0].day} [{hospitals[0].timeSlots[0].startTime} to {hospitals[0].timeSlots[0].endTime}]</p>
                            </div>
                            <div className={styles.doctorContent}>
                                <h5 style={{"color":"red"}}>Fees&nbsp;:&nbsp;${fees}</h5>
                            </div>
                        </Card.Text>
                        <Button className={styles.btn}><Link to={`/doctors/${name}`} className={styles.btnText}>Make an Appointment</Link></Button>
                    </Card.Body>
                </Card>
            </Col>

        </div>
    )
}

export default Doctor