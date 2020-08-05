import React, { useState, useEffect } from 'react';
import OrderForm from './../OrderForm';
import BasketItem from '../BasketItem';

function Cart(props) {
    const [cartItems, setCartItems] = useState([]);
    const [fullPrice, setFullPrice] = useState(0);

    useEffect(() => {
        const sessionItems = JSON.parse(sessionStorage.getItem('basket'));
        if (sessionItems.length !== 0) {
            setCartItems(sessionItems);
            console.log(sessionItems);
        }
    }, [props]);

    useEffect(() => {
        const sessionItems = JSON.parse(sessionStorage.getItem('basket'));
        let amount = 0;
        sessionItems.map(item => {
            amount += item.payPrice;
        });
        setFullPrice(amount);
    }, [cartItems]);

    return (
        <div className="CartBox container">
            {cartItems.length === 0 ? 'Basket is empty' :
                <div>
                    <h2>Basket Items</h2>
                    {cartItems.map((item, key) => (
                        <BasketItem key={key} id={key} product={item} />
                    ))}
                    <h3 className="float-right">Pay: {fullPrice} ֏</h3>
                    <OrderForm payAmount={fullPrice} />
                </div>
            }
        </div>
    );
}

export default Cart;