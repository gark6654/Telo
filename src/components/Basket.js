import React, { useState, useEffect, useContext } from 'react';
import { SiteText } from '../App';
import { Link } from 'react-router-dom';
import Icon from '../media/shop.svg';

function Basket(props) {
    const Text = useContext(SiteText).basketTitle; // Basket part text sorted by language.
    const [basketLength, setBasketLength] = useState(0);
    
    // Set basket items count.
    useEffect(() => {
        setBasketLength(props.length);
    }, [props]);

    return (
        <div className="BasketBox col-md col-sm col-xs">
            <Link to="/cart/">
            <button className="BasketButton float-right">
                <img className="BasketIcon" src={Icon} alt="basket" width="50" height="35" />
                <label>{Text}</label>
                <div className="BasketItemCount">
                    <span>{basketLength}</span>
                </div>
            </button>
            </Link>
        </div>
    );
}

export default Basket;