import React, { useState, useContext } from 'react';
import { SiteText } from '../App';
import { ToBasket } from '../App';
import Icon from '../media/shop.svg';
 
function ToCartForm(props) {
    const Text = useContext(SiteText).toCartForm; // ToCartForm part text sorted by language.
    const AddToBasket = useContext(ToBasket); // Function get's from context (APP.js).

    const [sum, setSum] = useState(props.product.price);

    function getSum(event) {    
        // Count * price
        setSum(event.target.value * props.product.price);
    }

    function submit(event) {
        event.preventDefault();
        AddToBasket(props.product);
        props.collapse();
    }

    return(
        <form className="ToCartBox" onSubmit={submit}>
            <div className="form-group">
                <b>{Text.count}</b>
                <input className="form-control" type="number" min={1} defaultValue={1} onChange={getSum} />
            </div>
            <h4 className="Sum">
                {sum} ֏
            </h4>
            <button className="btn btn-primary">
                <img src={Icon} alt="logo" width="25" height="25" /> {Text.toCart}
            </button>
        </form>
    );
}

export default ToCartForm;