import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from './Pages/Home';
import Shop from './Pages/shop/Shop';
import Cart from './Pages/cart/Cart';
import OrderAndDelivery from './Pages/OrderAndDelivery';

function Content(props) {
    return (
        <div className="Content">
            {/*
                A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. 
            */}
            <Switch>
                <Route path="/Order+Delivery/">
                    <OrderAndDelivery />
                </Route>
                <Route path="/Shop/">
                    <Shop />
                </Route>
                <Route path="/cart/">
                    <Cart />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </div>
    );
}

export default Content;