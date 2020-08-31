import React, { useState, useEffect, useContext } from 'react';
import { SiteText, BasketItems, ClearBasket } from '../../../App';
import OrderForm from './OrderForm';
import BasketItem from './BasketItem';

function Cart(props) {
    const Text = useContext(SiteText).content.pages.cart;
    const BasketProducts = useContext(BasketItems);
    const clearBasket = useContext(ClearBasket);

    const [cartItems, setCartItems] = useState([]);
    const [fullPrice, setFullPrice] = useState(0);
    const [freeDelivery, setFreeDelivery] = useState(false);

    // UI
    const [order, setOrder] = useState(false);

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
            return amount += item.payPrice;
        });

        // Delivery amount. 
        if (amount < 10000) {
            setFreeDelivery(false);
            amount += 500;
        }
        else {
            setFreeDelivery(true);
        }

        setFullPrice(amount);
    }, [cartItems]);

    function buyBasket(clientInfo) {
        const data = {
            customer: clientInfo,
            items: BasketProducts,
            freeDelivery: freeDelivery,
            pay: fullPrice
        };
        fetch("http://localhost:5000/buy",
            {
                method: 'POST',
                body: JSON.stringify({
                    data: data
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })

        setOrder(true);
        clear();
    }

    function clear() {
        setCartItems([]);
        clearBasket();
    }

    return (
        <div className="CartBox container">
            {cartItems.length === 0 ? (
                order ? // If order show thanks.
                    <div className="successBox alert alert-success" role="alert">
                        <h1>{Text.success}</h1>
                        <p style={{'fontSize': 100 + 'px'}}>&#128540;&#128527;</p>
                    </div>
                    : // Else
                    <div className="alert alert-info" role="alert">
                        <h1>{Text.empty}</h1>
                    </div>
            ) : // Else
                <div>
                    <h2>{Text.basket.title}</h2>
                    {cartItems.map((item, key) => (
                        <BasketItem key={key} id={key} product={item} />
                    ))}
                    <button className="btn btn-danger" onClick={clear}>
                        {Text.removeAll}
                    </button>
                    {!freeDelivery ? <h4>{Text.Delivery}: 500 ֏</h4> : ''}

                    <h3 className="FullAmount">{Text.pay}: {fullPrice} ֏</h3>
                    <OrderForm payAmount={fullPrice} buy={buyBasket} />
                </div>
            }
        </div>
    );
}

export default Cart;