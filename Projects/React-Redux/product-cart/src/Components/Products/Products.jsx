import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../Features/ProductFeature/productSlice';
import { Container, Row } from 'react-bootstrap';
import Product from '../Product/Product';

const Products = () => {
  const products = useSelector(state => state.products.products)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts())
  }, [dispatch])
  return (
    <div>
      <Container>
        <h1 className='text-center my-3'>Add To Cart Project</h1>
        <Row xs={1} md={3} className="g-4">
          {
            products.map(product => <Product product={product} key={product.id}></Product>)
          }
        </Row>
      </Container>

    </div>
  )
}

export default Products