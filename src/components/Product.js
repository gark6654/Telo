import React from 'react';
import Persil from '../media/Products/persil.jpg';

function Product(props) {
    return (
        <div className="Product col-lg-3 col-md-5 col-sm-5">
            <h1>
                Persil
            </h1>
            <img src={Persil} alt="prd" />
            <label>
                Automatic Washing Pawder
            </label>
            <h4 className="MoneySymbol">
                80 <span className="MoneySymbol">₾</span>
            </h4>
        </div>
    );
}

export default Product;