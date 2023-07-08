import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import './ItemDetails.css';
import { removeItemFromCart } from '../../Features/CartFeature/cartSlice';

const ItemDetails = () => {
  const [showItem, setShowItem] = useState(false);
  const dispatch = useDispatch();
  const items = useSelector((state) => state.carts.items);
  const navigate=useNavigate()
  const { title } = useParams();
  
  let findItem = items.find((item) => item.title === title);
  const handleRemoveItem = () => {
    dispatch(removeItemFromCart(findItem));
  };


  return (
    <>
      <div className="itemContainer">
          <h1>Item Details Page</h1>
          <div className="itemDetail">
            <div>
              <img src={findItem.thumbnail} alt="" width="300px" height="200px" />
            </div>
            <div>
              <p>Title: {findItem.title}</p>
              <div className="content-part">
                <p>Price: ${findItem.price}</p>
                <p>Rating: ${findItem.rating}</p>
              </div>
              <div className="content-part">
                <p>Description: {findItem.description}</p>
              </div>
              <div className="content-part">
                <p>Total: $70</p>
                <p>
                  Remove: <i className="fa-solid fa-trash col text-danger" onClick={handleRemoveItem}></i>
                </p>
              </div>
            </div>
          </div>
        </div>

    </>
  );
};

export default ItemDetails;
