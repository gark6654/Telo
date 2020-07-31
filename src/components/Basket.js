import React, { useState } from 'react';
import { SiteText } from '../App';
import { Link } from 'react-router-dom';
import Icon from '../media/shop.svg';

function Basket(props) {
    const [count, setCount] = useState(0);

    return (
        <div className="BasketBox col-md col-sm col-xs">
            <Link to="/cart/">
            <button className="BasketButton float-right">
                <img className="BasketIcon" src={Icon} alt="basket" width="50" height="35" />
                <label>{props.title}</label>
                <div className="BasketItemCount">
                    <span>{count}</span>
                </div>
            </button>
            </Link>
        </div>
    );
}

export default Basket;