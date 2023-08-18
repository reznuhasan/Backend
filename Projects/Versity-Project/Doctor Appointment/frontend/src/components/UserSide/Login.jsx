import React, { useEffect, useState } from 'react'
import { Container,Form,Row,Col} from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Card} from 'react-bootstrap';
import { Image} from 'react-bootstrap';
import { NavLink,Link, useNavigate } from 'react-router-dom';
import "../../styles/login.css"
import axios from 'axios';


const Login = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });


  const handleChangeInput = (e) => {
    setUserData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
 
  useEffect(()=>{
    const auth=localStorage.getItem("token")
    if(auth){
      navigate('/doctors')
    }
  },[])
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/api/users/login', userData)
      .then((response) => {
        localStorage.setItem("token",response.data.token)
        console.log(response.data)
        console.log('User logged in successfully',);
        // Update the authentication state to true
        navigate("/doctors"); // Redirect to a protected route after successful login
      })
      .catch((err) => {
        console.error('Error logging in:', err);
        // Add proper error handling and display error messages to the user
        alert('Login failed. Please try again.');
      });
  };
  return (
    <>
   <Container className='login' >
   <Row >
       <Col xs={6}>
       <Image className='loginImag' src="./assets/gif/login.gif" rounded/>
       </Col>
       
        
        <Col style={{ marginTop: '90px' }} xs={6} >
       <Card style={{ width: '20rem' }}>
         <Card.Body>
         <Form onSubmit={handleSubmit} >
           <Form.Group className="mb-3" controlId="formBasicEmail">
             {/* <Form.Label>Email address</Form.Label> */}
             <Form.Control type="email" placeholder="Email Address" name='email' onChange={handleChangeInput} value={userData.email}/>
           </Form.Group>

           <Form.Group className="mb-3" controlId="formBasicPassword">
             {/* <Form.Label>Password</Form.Label> */}
             <Form.Control type="password" placeholder="Password" name='password' onChange={handleChangeInput} value={userData.password} />
           </Form.Group>
           <Button style={{ width: '285px', marginTop:'10px' }} variant="primary" type="submit">
                    Signin
                </Button>
             <hr></hr>

             <Button className='signupbtn' style={{ width: '285px', marginTop:'10px' }} variant="primary" type="submit">
             <NavLink to="/register">Create New Account</NavLink>
                </Button>
           
       </Form>
         </Card.Body>
       
       </Card>
       </Col>
     </Row>
     
   </Container>
   <hr></hr>
 </>
  )
}

export default Login