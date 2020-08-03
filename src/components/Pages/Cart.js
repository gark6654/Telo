import React, { useState, useEffect } from 'react';
import RemoveIcon from '../../media/cancelRed.svg';
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
                    <h1>Basket Items</h1>
                    {cartItems.map((item, key) => (
                        <BasketItem key={key} product={item} />
                    ))}
                </div>
            }
        </div>
    );
}

export default Cart;