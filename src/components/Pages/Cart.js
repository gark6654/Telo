import React, { useState, useEffect } from 'react';
import RemoveIcon from '../../media/cancelRed.svg';
import OrderForm from './../OrderForm';

function Cart(props) {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const sessionItems = JSON.parse(sessionStorage.getItem('basket'));
        if (sessionItems) {
            setCartItems(sessionItems);
        }
    }, [props]);

    return (
        <div className="container">
            {cartItems.length === 0 ? 'Basket is empty' :
                <div className="table-responsive-lg">
                    <table className="table">
                        <caption>Basket Items</caption>
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Description</th>
                                <th scope="col">Price</th>
                                <th scope="col">Count</th>
                                <th scope="sol">Pay</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((item, key) => (
                                <tr key={key}>
                                    <th scope="row">{key + 1}</th>
                                    <td>{item.product.name}</td>
                                    <td>{item.product.desc}</td>
                                    <td>{item.product.price}</td>
                                    <td>{item.count}</td>
                                    <td>{item.payPrice}</td>
                                    <td>
                                        <button>
                                            <img src={RemoveIcon} alt="logo" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <OrderForm />
                </div>
            }
        </div>
    );
}

export default Cart;