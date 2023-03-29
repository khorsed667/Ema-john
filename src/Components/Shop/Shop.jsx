import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart'
import './Shop.css'

const Shop = () => {
    const [products, setProducts ] = useState([])

    const [cart, setCart] = useState([])

    const handelClick = (product) =>{
        const newCart = [...cart, product]
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
            <div  className="order-area">
                <Cart cart = {cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;