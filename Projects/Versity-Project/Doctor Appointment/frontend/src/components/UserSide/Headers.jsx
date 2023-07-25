import React from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import '../../styles/headers.css'
const Headers = () => {
  return (
    <div>
        <Navbar className='navbar' data-bs-theme="light" fixed="top">
        <Container>
          <Link to="/" className='logo'>H-DoCTor</Link>
          <Nav className="nav">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/doctors">Find Doctor</NavLink>
            <NavLink to="/suggestion">Suggestion</NavLink>
            <NavLink to="/contact">Contact Us</NavLink>
            <div className=''>
              <Button><Link to="/login" className='login'>Login</Link></Button>
              <Button><Link to="/register" className='register'>Register</Link></Button>
            </div>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Headers