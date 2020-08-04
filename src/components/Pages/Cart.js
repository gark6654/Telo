import React, { useState, useEffect } from 'react';
import OrderForm from './../OrderForm';
import BasketItem from '../BasketItem';

function Cart(props) {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const sessionItems = JSON.parse(sessionStorage.getItem('basket'));
        if (sessionItems) {
            setCartItems(sessionItems);
        }
    }, [props]);

    return (
        <div className="CartBox container">
            {cartItems.length === 0 ? 'Basket is empty' :
                <div>
                    <h2>Basket Items</h2>
                    {cartItems.map((item, key) => (
                        <BasketItem key={key} id={key} product={item} />
                    ))}
                    <OrderForm />
                </div>
            }
        </div>
    );
}

export default Cart;