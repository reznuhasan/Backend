import React from 'react'
import "../../styles/helpline.css"
import {Container, Row , Col,InputGroup,Form,Button }from "react-bootstrap"
import {Image}from "react-bootstrap"
const HelpLine = () => {
  return (
    <div>
        <Container>
              <div className="help">
                <Row>
                  <Col  xs={6} >
                  <Image  className='helpimage'style={{height:'100%', width:'100%', }} src="./assets/image/helps.png" rounded />
                  </Col>
                  <Col style={{marginTop:'80px'}} xs={6} >
                      <h2>Any Urgent Queries</h2><hr></hr>
                      <InputGroup >
                        <Form.Control className='formarea' as="textarea" aria-label="With textarea" placeholder='Write Something Here'/>
                      </InputGroup>
                      <Button style={{marginTop:'15px'}} variant="outline-primary">Send Us</Button>
                  </Col>
                </Row>
              </div>
        </Container>
    </div>
  )
}

export default HelpLine