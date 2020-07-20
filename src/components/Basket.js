import React from 'react';
import Icon from '../media/shop.svg';

function Basket(props) {
    return (
        <div className="BasketBox col-md col-sm col-xs">
            <button className="BasketButton float-right">
                <img className="BasketIcon" src={Icon} alt="basket" width="50" />
                <label>My Cart</label>
                <div className="BasketItemCount">
                    <span>0</span>
                </div>
            </button>
        </div>
    );
}

export default Basket;