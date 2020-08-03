import React, { useEffect, useState, useContext } from 'react';
import { ChangeBasket } from '../App';

function BasketItem(props) {
    // UI
    const [isHover, setIsHover] = useState(false);
    // Product data
    const product = props.product.product;

    const [count, setCount] = useState(null);
    const [payPrice, setPayPrice] = useState(null);

    const change = useContext(ChangeBasket);

    useEffect(() => {
        setCount(props.product.count);
        setPayPrice(props.product.payPrice);
    }, [props]);

    // On count change change payPrice too.
    function changeCount(event) {
        const count = event.target.value;
        change(product.id, count);
    }

    function hover() {
        setIsHover(true);
    }
    function leave() {
        setIsHover(false);
    }

    return (
        <div className="BasketItem container-fluid" onMouseEnter={hover} onMouseLeave={leave}>
            <div className="row">
                <div className="ImageBox col-lg-2 col-md-2 col-sm-3 col-xs-5">
                    <img src={`http://192.168.0.105:3000/media/Products/${product.img}`} alt="prInfo" />
                </div>
                <div className="ProductInfoBox col-lg col-md col-sm col-xs">
                    <h3>
                        {product.name}
                    </h3>
                    <p>
                        {product.desc}
                    </p>
                    <h4>
                        {product.price} ֏
                    </h4>
                    <div className="form">
                        <span>Count</span>
                        <input className="form-control" type="number" defaultValue={count} onChange={changeCount} />
                        <span>Pay</span>
                        <input className="form-control" type="number" value={payPrice} readOnly /> ֏  
                    </div>
                </div>
            </div>
            {isHover ? <button className="RemoveButton btn">Remove From Basket</button> : ''}
        </div>
    );
}

export default BasketItem;