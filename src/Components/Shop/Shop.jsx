import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts ] = useState([])

    const [Cart, setCart] = useState([])

    const handelClick = (product) =>{
        const newCart = [...Cart, product]
        setCart(newCart)
    }

    useEffect( () =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    } , [])

    return (
        <div className='shop-section'>
            <div className="product-area">
                {
                    products.map(product => <Product
                    key={product.id}
                    product = {product}
                    handelClick = {handelClick}
                    ></Product>)
                }
            </div>
            <div className="order-area">
                Oder Summary
                <h3>Total product : {Cart.length}</h3>
            </div>
        </div>
    );
};

export default Shop;