import React, { useState } from 'react';

function Product(props) {
    const [zoom, setZoom] = useState(false);

    function zoomProduct() {
        console.log('Garik');
    }

    return (
        <div className="Product col-lg-3 col-md-5 col-sm-5" onClick={zoomProduct}>
            <h1>
                {props.name}
            </h1>
            <img src={`http://192.168.0.102:3000/media/Products/${props.img}`} alt="prd" />
            <label>
                {props.desc}
            </label>
            <h4 className="ProductPriceBox MoneySymbol">
                {props.price} <span className="MoneySymbol">₾</span>
            </h4>
        </div>
    );
}

export default Product;