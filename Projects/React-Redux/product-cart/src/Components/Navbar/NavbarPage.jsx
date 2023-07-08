import React, { useState } from 'react'
import { Button, Container,Nav, Navbar } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import "./NavbarPage.css"
import { Menu, MenuItem } from '@mui/material'
import cart from "../../assets/cart.gif"

const NavbarPage = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Link href="/" className='logo'>Add To Cart</Link>
                    <Nav className="me-auto">
                        <NavLink className="page" to="/">Home</NavLink>
                        <NavLink className="page" to="/product">Product</NavLink>
                    </Nav>
                    <Button
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        <div className='font-part'>
                            <i className="fa-solid fa-cart-shopping font-icon" ></i>
                            <div className="font-text-part">
                                <span className='font-text'>1</span>
                            </div>
                        </div>
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <div className='card-details'>
                            <div className='empty-content'>
                            <p>Your card is empty</p>
                            <i className='fas fa-close' onClick={handleClose} style={{"fontSize":"24px"}}></i>
                            </div>
                            <img src={cart} alt="" />
                        </div>
                    </Menu>




                </Container>
            </Navbar>

        </div>
    )
}

export default NavbarPage