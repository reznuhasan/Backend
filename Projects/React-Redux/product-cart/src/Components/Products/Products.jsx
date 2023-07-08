import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../Features/ProductFeature/productSlice';
import { Alert, Container, Modal, Row } from 'react-bootstrap';
import Product from '../Product/Product';

const Products = () => {
  const [showPopUp,setShowPopUp]=useState(false);
  const products = useSelector(state => state.products.products)
  const dispatch = useDispatch();
   

  useEffect(() => {
    dispatch(getAllProducts())
  }, [dispatch])

  useEffect(()=>{
    if(showPopUp){
      const timeOut=setTimeout(()=>{
        setShowPopUp(false)
      },1000)
      return ()=>clearTimeout(timeOut);
    }
  },[showPopUp])
  const handlePopUp=(childValue)=>{
    setShowPopUp(childValue)
  }
  return (
    <div>
      {showPopUp && (
        <Modal  show={showPopUp}
        backdrop="static"
        keyboard={false}
        >
        <Modal.Body>
          Product Add Successfully
        </Modal.Body>
        </Modal>
      )}
      <Container>
        <h1 className='text-center my-3'>Add To Cart Project</h1>
        <Row xs={1} md={3} className="g-4">
          {
            products.map(product => <Product product={product} key={product.id} handlePopUp={handlePopUp}></Product>)
          }
        </Row>
      </Container>

    </div>
  )
}

export default Products