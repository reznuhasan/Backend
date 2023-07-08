import React, { useState } from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import "./NavbarPage.css"
import { Menu, MenuItem } from '@mui/material'
import cart from "../../assets/cart.gif"
import { useDispatch, useSelector } from 'react-redux'
import { removeItemFromCart } from '../../Features/CartFeature/cartSlice'

const NavbarPage = () => {
    const dispatch=useDispatch()
    const items = useSelector(state => state.carts.items)
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
                                <span className='font-text'>{items.length}</span>
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
                        {
                            (items.length === 0) ? <div className='card-details'>
                                <div className='empty-content'>
                                    <p>Your card is empty</p>
                                    <i className='fas fa-close' onClick={handleClose} style={{ "fontSize": "24px" }}></i>
                                </div>
                                <img src={cart} alt="" />
                            </div> :
                            <div>
                                <div style={{
                                    "display":"flex",
                                }}>
                                    <h3>Picture</h3>
                                    <h3 style={{
                                        "paddingLeft":"20px"
                                    }}>Product</h3>
                                </div>
                                <hr />
                               {
                                items.map(item=>{
                                    return(
                                        <div className='row card-details'>
                                           <Link className='col' to={`/items/${item.title}`} onClick={handleClose}>
                                           <img src={item.thumbnail} alt="" width="70px" height="50px" />
                                           </Link>
                                            <div className='col'>
                                                <p>{item.title}</p>
                                                <p>Price:${item.price}</p>
                                                <p>Quantity:{item.quantity}</p>
                                            </div>
                                           <i className="fa-solid fa-trash col" style={{"fontSize":"40px"}} onClick={()=>dispatch(removeItemFromCart(item))}></i>
                                        </div>
                                    )
                                })
                               }
                            </div>
                        }
                    </Menu>




                </Container>
            </Navbar>

        </div>
    )
}

export default NavbarPage