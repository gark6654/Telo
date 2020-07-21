import React from 'react';

function Filters(props) {
    return (
        <div className="FiltersBox">
            <div className="Title">
                <h5>Filters</h5>
            </div>
            <div className="PriceFilter">
                <span>Price:</span>
                <form>
                    <span>From</span>
                    <input type="number" step="0.1" min="0" />
                    <span>To</span>
                    <input type="number" step="0.1" />
                    <span>₾</span>
                </form>
            </div>
        </div>
    );
}

export default Filters; 