import React from 'react'
import { useSelector } from 'react-redux'

const Carts = () => {
    const items=useSelector(state=>state.carts.items)
    console.log(items)
  return (
    <div>Carts</div>
  )
}

export default Carts