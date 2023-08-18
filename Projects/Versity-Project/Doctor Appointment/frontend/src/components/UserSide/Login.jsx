import React from 'react'
import { Container,Form,Row,Col} from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Card} from 'react-bootstrap';
import { Image} from 'react-bootstrap';
import { NavLink,Link } from 'react-router-dom';
import "../../styles/login.css"


const Login = () => {
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
         <Form >
           <Form.Group className="mb-3" controlId="formBasicEmail">
             {/* <Form.Label>Email address</Form.Label> */}
             <Form.Control type="email" placeholder="Email Address" />
           </Form.Group>

           <Form.Group className="mb-3" controlId="formBasicPassword">
             {/* <Form.Label>Password</Form.Label> */}
             <Form.Control type="password" placeholder="Password" />
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