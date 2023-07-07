import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import "./NavbarPage.css"

const NavbarPage = () => {
    return (
        <div>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Link href="/" className='logo'>Add To Cart</Link>
                    <Nav className="me-auto">
                        <NavLink className="page" to="/">Home</NavLink>
                    </Nav>
                    <div className='font-part'>
                        <i className="fa-solid fa-cart-shopping font-icon" ></i>
                        <div className="font-text-part">
                            <span className='font-text'>1</span>
                        </div>

                    </div>

                </Container>
            </Navbar>
        </div>
    )
}

export default NavbarPage