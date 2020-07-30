import React, { useState } from 'react';

function ToCartForm(props) {
    const [sum, setSum] = useState(props.product.price);

    function getSum(event) {    
        // Count * price
        setSum(event.target.value * props.product.price);
    }

    function submit(event) {
        event.preventDefault();
        console.log(props.product);
    }

    return(
        <form className="ToCartBox" onSubmit={submit}>
            <div className="form-group">
                <span>Count</span>
                <input className="form-control" type="number" min={1} defaultValue={1} onChange={getSum} />
            </div>
            <h4 className="Sum">
                {sum} ₾
            </h4>
            <button className="btn btn-primary">
                Add To Cart
            </button>
        </form>
    );
}

export default ToCartForm;