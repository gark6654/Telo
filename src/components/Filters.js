import React, { useState, useContext } from 'react';
import { SiteText } from '../App';

function Filters(props) {
    const Text = useContext(SiteText).pages.shop.filterPart; // Filters part text sorted by language.
    const [maxPrice, setMaxPrice] = useState(100);

    // Set max price value from input or slider(range).
    function setValues(event) {
        setMaxPrice(event.target.value);
    }

    return (
        <div className="FiltersBox">
            <div className="Title">
                <h5>{Text.title}</h5>
            </div>
            <div className="PriceFilter">
                <span>{Text.price}:</span>
                <form>
                    <div className="form-group">
                        <span>{Text.from}</span>
                        <input type="number" min="0" step="1" value="0" />
                        <span>{Text.to}</span>
                        <input 
                            type="number" 
                            min="1" 
                            max="1000" 
                            step="1" 
                            value={maxPrice} 
                            onChange={setValues} 
                        />
                        <span className="MoneySymbol">֏</span>
                    </div>
                    <div className="form-group">
                        <input 
                            type="range" 
                            min="1" 
                            max="1000" 
                            onChange={setValues} 
                            value={maxPrice} 
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Filters; 