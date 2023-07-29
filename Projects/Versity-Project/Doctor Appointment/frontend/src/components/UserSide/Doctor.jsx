import React from 'react'
import { Card, Col } from 'react-bootstrap'

const Doctor = ({doctor}) => {
    const {image,name}=doctor
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={`/src/assets/${image}`}/>
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit
                            longer.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

        </div>
    )
}

export default Doctor