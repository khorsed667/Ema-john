import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Order.css'
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';

const Order = () => {

    const savedCart = useLoaderData()

    const [cart, setCart] = useState(savedCart)

    const removeItem = (id) =>{
        const remaining = cart.filter(product => product.id !== id)
        setCart(remaining)
        removeFromDb(id)
    }

    const clearCart = () =>{
        setCart([])
        deleteShoppingCart()
    }

    console.log(savedCart)
    return (
        <div className="shop-section">
            <div className="product-section">
                {
                    cart.map(product => <ReviewItem
                    key={product.id}
                    product ={product}
                    removeItem={removeItem}
                    ></ReviewItem>)
                }
            </div>
            <div className="order-area">
                <Cart
                cart = {cart}
                clearCart={clearCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Order;