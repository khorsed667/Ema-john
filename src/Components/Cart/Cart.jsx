import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart
    console.log(cart)
    
    let totalPrice = 0;
    let totalShiping = 0;
    for(const product of cart){
        totalPrice = totalPrice + product.price
        totalShiping = totalShiping + product.shipping
    }
    const tax = (totalPrice * 5 / 100)
    const grandTotal = totalPrice + totalShiping + tax

    return (
        <div className='cart-area'>
            <h2>Order Summary</h2>
            <p>Selected items : $ {cart.length}</p>
            <p>Total Price: $ {totalPrice}</p>
            <p>Total shipping price: $ {totalShiping}</p>
            <p>Tax: $ {tax.toFixed(2)}</p>
            <h5>Grand Total: $ {grandTotal.toFixed(2)}</h5>
        </div>
    );
};

export default Cart;