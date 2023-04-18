import React from 'react';
import './ReviewItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ReviewItem = ({product, removeItem}) => {
    const {id, name, price, img, quantity} = product
    return (
        <div className='review-products'>
            <img src={img} alt="" />
            <div className="review-text">
                <p className='product-price'>{name}</p>
                <p>Price: <span className='orange-text'>$ {price}</span></p>
                <p>Order Quantity: <span className='orange-text'>{quantity}</span></p>
            </div>
            <button onClick={() => removeItem(id)} className='delete-btn'>
            <FontAwesomeIcon className='delete-icon' icon   ={faTrashAlt} />
            </button>
        </div>
    );
};

export default ReviewItem;