import React, { useState } from 'react';
import Icon from '../media/shop.svg';

function Basket(props) {
    const [count, setCount] = useState(0);

    return (
        <div className="BasketBox col-md col-sm col-xs">
            <button className="BasketButton float-right">
                <img className="BasketIcon" src={Icon} alt="basket" width="50" height="35" />
                <label>My Cart</label>
                <div className="BasketItemCount">
                    <span>{count}</span>
                </div>
            </button>
        </div>
    );
}

export default Basket;