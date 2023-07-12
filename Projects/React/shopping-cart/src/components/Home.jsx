import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../features/Products/ProductSlice';
import '../styles/home.scss'
import { Modal, Row } from 'react-bootstrap';
import Product from './Product';

const Home = () => {
  const [show, setShow] = useState(false);
  const handleShow = (value) =>{
      setShow(true);
  };
  const products = useSelector(state => state.product.product)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts())
  }, [dispatch])
  useEffect(()=>{
    const handleClose=setTimeout(()=>{
      setShow(false)
    },500)
    return ()=>clearTimeout(handleClose)
  })
  return (
    <div className='container'>
      <h1 className='text-center'>Total Product:{products.length}</h1>
      <div>
        <Row xs={1} md={3} className="g-4">
           {products.map(product=><Product product={product} key={product.id} handleShow={handleShow}></Product>)}
        </Row>
      </div>
      <Modal show={show}>
        <h5 className='text-center modal-text'>Product Add To Cart Successfully</h5>
      </Modal>
    </div>
  )
}

export default Home;