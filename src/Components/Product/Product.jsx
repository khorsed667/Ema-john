import React from 'react';
import './Product.css'

const Product = (props) => {
    const { name, seller, price, img, quantity, ratings, stock } = props.product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <p className='p-price'>Price:{price}</p>
                <p className='p-menu'>Manufacturer:{seller}</p>
                <p className='p-str'>Rating:{ratings} satr</p>
            </div>
                <button className='cart-btn'>Add to Cart</button>
        </div>
    );
};

export default Product;