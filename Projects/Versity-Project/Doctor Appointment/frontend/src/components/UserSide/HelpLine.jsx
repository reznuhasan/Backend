import React from 'react'
import "../../styles/helpline.css"
import {Container, Row , Col}from "react-bootstrap"
import {Image}from "react-bootstrap"
const HelpLine = () => {
  return (
    <div>
        <Container>
              <div className="help">
                <Row>
                  <Col xs={6} >
                  <Image className='helpimage'style={{height:'100%', width:'100%'}} src="./src/assets/helpline.gif" rounded />
                  </Col>
                  <Col  xs={6} >
                    <ul>
                      <li>hello</li>
                      <li>we are always ready to help</li>
                      <li>our main purpose is helping others</li>
                    </ul>
                  </Col>
                  <Col xs={6}>
                    <h5>Any Queries Leave a Message</h5>
                  </Col>
                </Row>
              </div>
        </Container>
    </div>
  )
}

export default HelpLine