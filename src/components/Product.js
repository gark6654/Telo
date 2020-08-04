import React, { useState, useEffect } from 'react';
import SingleProduct from './SingleProduct';

function Product(props) {
    const [info, setInfo] = useState({
        "name": "",
        "img": "",
        "desc": "",
        "price": 0
    });
    const [zoom, setZoom] = useState(false);

    useEffect(() => {
        setInfo({
            "name": props.name,
            "img": props.img,
            "desc": props.desc,
            "price": props.price
        });
    }, [props]);

    function zoomProduct() {
        setZoom(true);
    }

    function collapseBox() {
        setZoom(false);
    }

    return (
        <>
            <div className="Product col-lg-3 col-md-5 col-sm-5" onClick={zoomProduct}>
                <h2>
                    {info.name}
                </h2>
                <img src={`http://192.168.0.105:3000/media/Products/${info.img}`} alt="prd" />
                <label>
                    {info.desc}
                </label>
                <h4 className="ProductPriceBox MoneySymbol">
                    {info.price} <span className="MoneySymbol">֏</span>
                </h4>
            </div>
            {
                zoom ? <SingleProduct product={info} collapse={collapseBox} /> : ''
            }
        </>
    );
}

export default Product;