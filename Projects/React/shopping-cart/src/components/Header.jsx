import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import "../styles/header.scss"
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'
const Header = () => {
    const items=useSelector(state=>state.cart.items)
    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary nav" fixed="top">
                <Container>
                    <Link to="/"><h3>Shopping Cart</h3></Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink href="/">Home</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                    <div className='icon'>
                        <Link to="/cart"><FontAwesomeIcon icon={faShoppingCart} style={{ "fontSize": "30px", "color": "blue" }} />
                            <div className="num">
                            <span>{items.length}</span>
                            </div>

                        </Link>
                    </div>
                </Container>
            </Navbar>

        </div>
    )
}

export default Header