import React, { useState, useEffect, useContext } from 'react';
import { SiteText, BasketItems } from '../../App';
import OrderForm from './../OrderForm';
import BasketItem from '../BasketItem';

function Cart(props) {
    const Text = useContext(SiteText).pages.cart;
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
            {cartItems.length === 0 ? (
                <div class="alert alert-info" role="alert">
                    <h1>{Text.empty}</h1>
                </div>
            ) : // Else
                <div>
                    <h2>{Text.basket.title}</h2>
                    {cartItems.map((item, key) => (
                        <BasketItem key={key} id={key} product={item} />
                    ))}
                    <h3 className="float-right">{Text.pay}: {fullPrice} ֏</h3>
                    <OrderForm payAmount={fullPrice} />
                </div>
            }
        </div>
    );
}

export default Cart;