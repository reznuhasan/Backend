import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Item from './Item'
import '../styles/carts.scss'
import { totalPrice } from '../features/CartFeature/cartSlice'
const Carts = () => {
    const {items}=useSelector(state=>state.cart)
    const dispatch=useDispatch();
    const total=useSelector(state=>state.cart.totalPrice)
    useEffect(()=>{
      dispatch(totalPrice())
    },[dispatch])
  return (
    <div>
        <div className='items'>
            {
              items.map(item=><Item item={item} key={item.title}></Item>)
            }
        </div>
        <div>
          <h1>Total Price:{total}</h1>
        </div>
    </div>
  )
}

export default Carts