import React, { useState, useContext } from 'react';
import { SiteText } from '../App';
import { ToBasket } from '../App';
 
function ToCartForm(props) {
    const Text = useContext(SiteText).toCartForm; // ToCartForm part text sorted by language.
    const AddToBasket = useContext(ToBasket); // Function get's from context (APP.js).

    // To basket product price.
    const [sum, setSum] = useState(props.product.price);
    const [count, setCount] = useState(1);

    function getSum(event) {    
        // Count * price
        const count = event.target.value;
        setCount(count);
        setSum(count * props.product.price);
    }

    function submit(event) {
        event.preventDefault();
        const toBasketProduct = {
            "product": props.product,
            "count": count,
            "payPrice": sum
        };
        AddToBasket(toBasketProduct);
        props.collapse();
    }

    return(
        <form className="ToCartBox" onSubmit={submit}>
            <div className="form-group">
                <b>{Text.count}</b>
                <input 
                    className="form-control" 
                    type="number" 
                    min={1} 
                    defaultValue={1} 
                    onChange={getSum} 
                    defaultValue={count} 
                />
            </div>
            <h4 className="Sum">
                {sum} ֏
            </h4>
            <button className="btn btn-primary">
                <img 
                    src="http://localhost:3000/media/Icons/shop.svg" 
                    alt="logo" width="25" height="25" 
                /> {Text.toCart}
            </button>
        </form>
    );
}

export default ToCartForm;