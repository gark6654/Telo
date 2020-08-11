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
    });

    useEffect(() => {
        const sessionItems = BasketProducts;
        let amount = 0;
        sessionItems.map(item => {
            return amount += item.payPrice;
        });
        setFullPrice(amount);
    }, [cartItems]);

    function buyBasket(clientInfo) {
        const data = {
            client: clientInfo,
            products: BasketProducts,
            pay: fullPrice
        };
        fetch("http://localhost:5000/buy",
            {
                method: "POST",
                body: 'data'
            })
    }

    return (
        <div className="CartBox container">
            {cartItems.length === 0 ? (
                <div className="alert alert-info" role="alert">
                    <h1>{Text.empty}</h1>
                </div>
            ) : // Else
                <div>
                    <h2>{Text.basket.title}</h2>
                    {cartItems.map((item, key) => (
                        <BasketItem key={key} id={key} product={item} />
                    ))}
                    <h3 className="FullAmount">{Text.pay}: {fullPrice} ֏</h3>
                    <OrderForm payAmount={fullPrice} buy={buyBasket} />
                </div>
            }
        </div>
    );
}

export default Cart;