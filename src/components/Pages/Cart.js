import React, { useState, useEffect, useContext } from 'react';
import { BasketItems } from '../../App';
import OrderForm from './../OrderForm';
import BasketItem from '../BasketItem';

function Cart(props) {
    const BasketProducts = useContext(BasketItems);

    const [cartItems, setCartItems] = useState([]);
    const [fullPrice, setFullPrice] = useState(0);

    useEffect(() => {
        const sessionItems = BasketProducts;
        if (sessionItems.length !== 0) {
            setCartItems(sessionItems);
        }
    }, [props]);

    useEffect(() => {
        const sessionItems = BasketProducts;
        let amount = 0;
        sessionItems.map(item => {
            amount += item.payPrice;
        });
        setFullPrice(amount);
    }, [cartItems]);

    return (
        <div className="CartBox container">
            {cartItems.length === 0 ?
                <div class="alert alert-info" role="alert">
                    <h1>Basket is empty</h1>
                </div> :
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