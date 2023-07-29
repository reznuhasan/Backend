import React from 'react'
import { Card, Col } from 'react-bootstrap'

const Doctor = ({doctor}) => {
    console.log(doctor);
    const {image,name,qualification,category,fees,hospitals}=doctor
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={`/src/assets/${image}`}/>
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            qualification{}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

        </div>
    )
}

export default Doctor