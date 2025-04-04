import React from 'react';
import './Cart.css';

const Cart = (props) => {
    let totalPrice = 0;
    for (let i = 0; i < props.cart.length; i++) {
        const course = props.cart[i];
        totalPrice = totalPrice + course.price
    }
    return (
            <div className='border border-info p-4 rounded bg-light cart'>
                <h2>Purchase Summary</h2>
                <h4>Courses Brought: {props.cart.length}</h4>
                <h5>Total Purchase: {totalPrice.toFixed(2)}</h5>
            </div>
    );
}

export default Cart;
