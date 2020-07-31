import React, { useState, useContext } from 'react';
import { SiteText } from '../App';
import { AddToCart } from '../App';
 
function ToCartForm(props) {
    const Text = useContext(SiteText).toCartForm; // ToCartForm part text sorted by language.

    const [sum, setSum] = useState(props.product.price);
    const func = useContext(AddToCart);

    function getSum(event) {    
        // Count * price
        setSum(event.target.value * props.product.price);
    }

    function submit(event) {
        event.preventDefault();
        func(props.product);
    }

    return(
        <form className="ToCartBox" onSubmit={submit}>
            <div className="form-group">
                <b>{Text.count}</b>
                <input className="form-control" type="number" min={1} defaultValue={1} onChange={getSum} />
            </div>
            <h4 className="Sum">
                {sum} ₾
            </h4>
            <button className="btn btn-primary">
                {Text.toCart}
            </button>
        </form>
    );
}

export default ToCartForm;