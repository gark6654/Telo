import React, { useState, useEffect } from 'react';
import SingleProduct from './SingleProduct';

function Product(props) {
    const [info, setInfo] = useState({
        "name": "",
        "img": "",
        "desc": "",
        "category": "",
        "price": 0,
        "maxCount": 0
    });

    // UI
    const [zoom, setZoom] = useState(false);
    const descLang = localStorage.getItem('lang');

    useEffect(() => {
        setInfo({
            "name": props.name,
            "img": props.img,
            "desc": props.desc,
            "category": props.cat,
            "price": props.price,
            "maxCount": props.count
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
                <h3>
                    {info.name} {/* Product Name */}
                </h3>
                {/* Product image */}
                <img src={`http://localhost:3000/media/Products/${info.img}`} alt="prd" />
                <label>
                    {
                        descLang === "РУС" ? info.desc.RU :
                            descLang === "ՀԱՅ" ? info.desc.AM :
                                info.desc.EN
                    }
                </label>
                {/* Product Price */}
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