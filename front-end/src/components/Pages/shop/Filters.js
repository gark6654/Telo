import React, { useState, useContext, useEffect } from 'react';
import { SiteText } from '../../../App';

function Filters(props) {
    // Filters part text sorted by language.
    const Text = useContext(SiteText).content.pages.shop.filterPart;
    const [maxPrice, setMaxPrice] = useState(100000);

    useEffect(() => {
        const sessionFilters = sessionStorage.getItem('filters');
        const max = sessionFilters ? JSON.parse(sessionFilters).maxPrice : null;
        if (max) {
            setMaxPrice(max);
        }
    }, [props]);

    // Set max price value from input or slider(range).
    function setValues(event) {
        const val = event.target.value;

        setMaxPrice(val);
        props.changeMax(val);
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
                        <input type="number" min="0" step="1" readOnly defaultValue="0" />
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
                            max="100000"
                            step="100"
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