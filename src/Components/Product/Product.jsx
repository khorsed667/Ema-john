import React from 'react';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    const { name, seller, price, img, quantity, ratings, stock } = props.product
    
    const handelClick = props.handelClick

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <p className='p-price'>Price:{price}</p>
                <p className='p-menu'>Manufacturer:{seller}</p>
                <p className='p-str'>Rating:{ratings} satr</p>
            </div>
                <button onClick={() => handelClick(props.product)} className='cart-btn'>
                    Add to Cart
                    <FontAwesomeIcon icon   ={faShoppingCart} />
                    </button>
        </div>
    );
};

export default Product;