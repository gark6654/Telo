import React, { useState, useEffect } from 'react';

function Filters(props) {
    const [maxPrice, setMaxPrice] = useState(100);

    // Set max price value from input or slider(range).
    function setValues(event) {
        setMaxPrice(event.target.value);
    }

    return (
        <div className="FiltersBox">
            <div className="Title">
                <h5>Filters</h5>
            </div>
            <div className="PriceFilter">
                <span>Price:</span>
                <form>
                    <div className="form-group">
                        <span>From</span>
                        <input type="number" min="0" step="1" value="0" />
                        <span>To</span>
                        <input type="number" min="1" step="1" value={maxPrice} onChange={setValues} />
                        <span>₾</span>
                    </div>
                    <div className="form-group">
                        <input type="range" min="1" max="1000" onChange={setValues} value={maxPrice} />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Filters; 