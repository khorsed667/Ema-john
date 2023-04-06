import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart'
import './Shop.css'
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

const Shop = () => {
    const [products, setProducts] = useState([])

    const [cart, setCart] = useState([])

    const handelClick = (product) => {
        const newCart = [...cart, product]
        setCart(newCart)
        addToDb(product.id)
    }

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    useEffect(() => {
        const storedCart = getShoppingCart()
        const savedCart = [];
        // step-1: get id
        for (const id in storedCart) {
            // step-2: get products from id
            const savedProduct = products.find(product => product.id === id)
            if (savedProduct) {
                const quantity = storedCart[id]
                savedProduct.quantity = quantity
                savedCart.push(savedProduct)
            }
        }
        setCart(savedCart)

    }, [products])

    return (
        <div className='shop-section'>
            <div className="product-area">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handelClick={handelClick}
                    ></Product>)
                }
            </div>
            <div className="order-area">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;