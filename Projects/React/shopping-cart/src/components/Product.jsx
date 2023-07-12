import React, { useState } from 'react'
import { Button, Card, Col } from 'react-bootstrap';
import "../styles/product.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { addItem } from '../features/CartFeature/cartSlice';
const Product = ({ product,handleShow }) => {
    const { title, description, price, brand, category, rating, thumbnail, stock } = product;
    const dispatch=useDispatch();
    return (
        <div>
            <Col>
                <Card className='p-2'>
                    <Card.Img variant="top" src={thumbnail} height="150px" />
                    <Card.Body style={{
                        "height": "250px"
                    }}>
                        <Card.Title className='title'>{title}</Card.Title>
                        <Card.Text className='text'>
                            <h5>Price:{price}</h5>
                            <p>Brand:{brand}</p>
                            <p>Category:{category}</p>
                            <p>stock:{stock}</p>
                            <h5><FontAwesomeIcon icon={faStar} />{rating}</h5>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="warning" className='w-100' onClick={()=>{
                            handleShow(true)
                            dispatch(addItem({ title, description, price, brand, category, rating, thumbnail, stock }))
                        }}>
                            Add To Cart
                        </Button>

                    </Card.Footer>

                </Card>
            </Col>
        </div>
    )
}

export default Product