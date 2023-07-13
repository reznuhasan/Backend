import React from 'react'
import { useSelector } from 'react-redux'
import Item from './Item'
import '../styles/carts.scss'
const Carts = () => {
    const items=useSelector(state=>state.cart.items)
  return (
    <div>
        <div className='items'>
            {
              items.map(item=><Item item={item} key={item.title}></Item>)
            }
        </div>
    </div>
  )
}

export default Carts