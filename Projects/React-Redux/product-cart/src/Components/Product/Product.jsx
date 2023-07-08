
import React, { useEffect, useState } from 'react'
import { Button, Card, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../Features/CartFeature/cartSlice';

const Product = ({ product }) => {
    const [buttonColor, setButtonColor] = useState("warning")
    const { thumbnail, price, title, stock, rating, description } = product;
    const dispatch = useDispatch()
    useEffect(()=>{
        if(buttonColor==="success"){
            const timeOut=setTimeout(()=>{
                setButtonColor("warning")
            },200)
            return ()=>clearTimeout(timeOut)
        }
    },[buttonColor])
    const handleAddToCart = () => {
        dispatch(addItemToCart(product))
        setButtonColor("success")

    }

    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={thumbnail} height="150px" />
                <Card.Body style={{ "height": "150px" }}>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
                <div className="row fw-bold">
                    <div className="col">{`Price: ${price}`}</div>
                    <div className="col">{`Rating: ${rating}`}</div>
                </div>
                <div className="fw-bold mb-3 text-danger">{`Stock: ${stock}`}</div>
                <Button className='w-100' variant={buttonColor} onClick={handleAddToCart}>Add To Cart</Button>
            </Card>
        </Col>

    )
}

export default Product