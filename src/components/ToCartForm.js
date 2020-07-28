import React, { useState, useEffect } from 'react';

function ToCartForm(props) {
    const [sum, setSum] = useState(props.price);

    function getSum(event) {    
        setSum(event.target.value * props.price);
    }

    return(
        <form className="ToCartBox">
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