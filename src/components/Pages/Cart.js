import React, { useState, useEffect } from 'react';

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
            {cartItems.length == 0 ? 'Basket is empty' :
                <div class="table-responsive-lg">
                    <table class="table">
                        <caption>Basket Items</caption>
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Description</th>
                                <th scope="col">Price</th>
                                <th scope="col">Count</th>
                                <th scope="sol">Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((item, key) => (
                                <tr>
                                    <th scope="row">{key + 1}</th>
                                    <td>{item.name}</td>
                                    <td>{item.desc}</td>
                                    <td>{item.price}</td>
                                    <td>{item.price}</td>
                                
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            }
        </div>
    );
}

export default Cart;