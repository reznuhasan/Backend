import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../features/Products/ProductSlice';
import { Row } from 'react-bootstrap';
import Product from './Product';

const Home = () => {
  const products = useSelector(state => state.product.product)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts())
  }, [dispatch])
  return (
    <div className='container'>
      <h1 className='text-center'>Total Product:{products.length}</h1>
      <div>
        <Row xs={1} md={3} className="g-4">
           {products.map(product=><Product product={product} key={product.id}></Product>)}
        </Row>
      </div>
    </div>
  )
}

export default Home;