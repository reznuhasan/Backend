import React from 'react';
import { Button, Container, Nav, Navbar,Dropdown,ButtonGroup, } from 'react-bootstrap';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import '../../styles/headers.css';
import {FaUserCheck} from 'react-icons/fa'
import {BiSolidUserPlus} from 'react-icons/bi'

const Headers = () => {
  const auth=localStorage.getItem("token")
  const navigate=useNavigate()
  const handleLogout=()=>{
    localStorage.clear()
    navigate('/login')
  }
  return (
    <div>
      <Navbar className='navbar' data-bs-theme="light" fixed="top">
        <Container>
          <Link to="/" className='logo'>H-DoCTor</Link>
          <Nav className="nav">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/doctors">Find Doctor</NavLink>
            <NavLink to="/hospital">Hospital</NavLink>
            <NavLink to="/suggestion">Suggestion</NavLink>
            <NavLink to="/helpline">HelpLine</NavLink>
            <div className=''>
              {
                !auth ?
                <>

                <Button variant="primary" type="submit">
                <Link to="/login">Signin</Link>
                </Button>
                </>
                :
                <Button onClick={handleLogout}>Logout</Button>
              }
              {/* You can add other components or elements that should change with authentication status here */}
            </div>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Headers;
