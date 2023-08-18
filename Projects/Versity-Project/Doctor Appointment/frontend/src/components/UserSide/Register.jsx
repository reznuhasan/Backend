import React from 'react'
import { Button } from 'react-bootstrap';
import { Image} from 'react-bootstrap';
import { Container,Form,Row,Col} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


const Register = () => {
  return (
    <>
    <Container style={{marginTop: '70px'}} >
         <Row>
          <Col style={{marginTop: '30px'}} xs={6}>
          <Image style={{height:'100%', width: '100%'}} src="./assets/gif/registration2.gif" rounded />
          </Col>
          <Col style={{marginTop:'80px'}} xs={6}>
                <Form>
                  <Row className="mb-2">
                      <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>User Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter User Name" />
                      </Form.Group>

                      <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter Your Email" />
                      </Form.Group>
                  </Row>
                  <Row className="mb-2">
                      <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter Password" />
                      </Form.Group>

                      <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control type="tel" placeholder="Enter Your Number " />
                      </Form.Group>
                  </Row>
                  <Row className="mb-2">
                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Gender</Form.Label>
                    <Form.Select defaultValue="Choose...">
                      <option>Male</option>
                      <option>Female</option>
                      <option>Custom</option>
                    </Form.Select>
                  </Form.Group>

                      <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Age</Form.Label>
                        <Form.Control type="number" placeholder="Enter Your Age" />
                      </Form.Group>

                      <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Blood Group</Form.Label>
                    <Form.Select defaultValue="Choose...">
                      <option>A+</option>
                      <option>B+</option>
                      <option>AB+</option>
                      <option>AB-</option>
                      <option>O+</option>
                      <option>O-</option>
                    </Form.Select>
                  </Form.Group>


                  </Row>
                  <Button style={{ width: '260px', marginTop:'20px' }} variant="primary" type="submit">
                    Signup
                </Button>
                <p style={{marginTop:'10px' }}>Already Have Account <NavLink to="/login">Signin</NavLink></p>
                </Form>
          </Col>
      </Row>
    </Container>
    <hr></hr>
    </>
  )
}

export default Register