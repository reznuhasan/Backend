import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import { Container, Form, Row, Col } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';


const Register = () => {
  const navigate = useNavigate()
  useEffect(() => {
    const auth = localStorage.getItem("token")
    if (auth) {
      navigate('/doctors')
    }
  }, [])
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    phone: "",
    gender: "Male",
    age: "",
    blood: "A+",
  })
  const handleChangeInput = (e) => {
    setUserData(prevData => ({
      ...prevData,
      [e.target.name]: e.target.value
    }))
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
    axios.post('http://localhost:5000/api/users/register', userData)
      .then((response) => {
        navigate('/login')
        console.log('Registration successful!', response.data);
      })
      .catch((error) => {
        // Handle any errors that occurred during the POST request
        console.error('Registration failed:', error);
      });
    setUserData({
      username: "",
      email: "",
      password: "",
      phone: "",
      gender: "Male",
      age: "",
      blood: "A+",
    })
  };
  return (
    <>
      <Container style={{ marginTop: '70px' }}>
        <Row>
          <Col style={{ marginTop: '30px' }} xs={6}>
            <Image
              style={{ height: '100%', width: '100%' }}
              src="./assets/gif/registration2.gif"
              rounded
            />
          </Col>
          <Col style={{ marginTop: '80px' }} xs={6}>
            <Form onSubmit={handleSubmit}>
              <Row className="mb-2">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>User Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter User Name"
                    name='username'
                    value={userData.username}
                    onChange={handleChangeInput}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter Your Email"
                    name="email"
                    value={userData.email}
                    onChange={handleChangeInput}
                  />
                </Form.Group>
              </Row>
              <Row className="mb-2">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter Password"
                    name="password"
                    value={userData.password}
                    onChange={handleChangeInput}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    type="tel"
                    placeholder="Enter Your Number"
                    name="phone"
                    value={userData.phone}
                    onChange={handleChangeInput}
                  />
                </Form.Group>
              </Row>
              <Row className="mb-2">
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>Gender</Form.Label>
                  <Form.Control
                    as="select"
                    name="gender"
                    value={userData.gender}
                    onChange={handleChangeInput}
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Custom">Custom</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Age</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter Your Age"
                    name="age"
                    value={userData.age}
                    onChange={handleChangeInput}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>Blood Group</Form.Label>
                  <Form.Control
                    as="select"
                    name="blood"
                    value={userData.blood}
                    onChange={handleChangeInput}
                  >
                    <option value="A+">A+</option>
                    <option value="B+">B+</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                  </Form.Control>
                </Form.Group>
              </Row>
              <Button
                style={{ width: '260px', marginTop: '20px' }}
                variant="primary"
                type="submit"
              >
                Signup
              </Button>
              <p style={{ marginTop: '10px' }}>
                Already Have an Account? <NavLink to="/login">Sign In</NavLink>
              </p>
            </Form>
          </Col>
        </Row>
      </Container>
      <hr />
    </>
  )
}

export default Register