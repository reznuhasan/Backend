import React from 'react'
import Styles from "../../styles/appointment.module.css"
const Appointment = ({ patient }) => {
    const { patientId, serialNumber, doctorName, serialTime } = patient;
    return (
        <div className='container'>
            <div className={Styles.appointment}>
                <h4>Id:{patientId}</h4>
                <h4>Doctor:{doctorName}</h4>
                <h4>Serial:{serialNumber}</h4>
                <h4>Time:{serialTime}</h4>
                <button>More Details</button>
            </div>
        </div>
    )
}

export default Appointment