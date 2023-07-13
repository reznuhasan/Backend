import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Button } from 'react-bootstrap';
import '../styles/item.scss'
import { useDispatch } from 'react-redux';
import { decrement, increment, removeItem, totalPrice } from '../features/CartFeature/cartSlice';

const Item = ({item}) => {
    const dispatch=useDispatch();
    const {id,thumbnail,quantity,title,price}=item;
  return (
    <div className='item'>
        <img src={thumbnail} alt="" />
        <div className='content'>
            <h5>{title}</h5>
            <div className='quantity'>
               <Button onClick={()=>{dispatch(increment(id)),dispatch(totalPrice())}}>+</Button>
               <input type="text" value={quantity}/>
               <Button onClick={()=>{dispatch(decrement(id)),dispatch(totalPrice())}}>-</Button>
            </div>
            <h5>Price:{price * quantity}</h5>
        </div>
        <div className='del-icon'>
        <FontAwesomeIcon icon={faTrash}  onClick={()=>{dispatch(removeItem(id)),dispatch(totalPrice())}}/>
        </div>
    </div>
  )
}

export default Item