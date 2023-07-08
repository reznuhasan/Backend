
import React from 'react'
import { Button, Card, Col } from 'react-bootstrap';

const Product = ({ product }) => {
    const { thumbnail, price, title, stock, rating, description } = product;

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
                <Button className='w-100' variant='warning'>Add To Cart</Button>
            </Card>
        </Col>

    )
}

export default Product