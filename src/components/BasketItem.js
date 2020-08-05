import React, { useEffect, useState, useContext } from 'react';
import { SiteText, ChangeBasket, RemoveItem } from '../App';

function BasketItem(props) {
    const Text = useContext(SiteText).pages.cart.basket.basketItem;
    const change = useContext(ChangeBasket);
    const remove = useContext(RemoveItem);

    // UI
    const [isHover, setIsHover] = useState(false);
    // Product data
    const product = props.product.product;

    const [count, setCount] = useState(props.product.count);
    const [payPrice, setPayPrice] = useState(props.product.payPrice);

    useEffect(() => {
        setPayPrice(count * product.price);
        change(props.id, count);
    }, [count]);

    // Change product count.
    function changeCount(event) {
        const count = event.target.value;
        setCount(count);
    }

    // Remove product from basket.
    function removeItem() {
        remove(props.id);
    }

    function hover() {
        setIsHover(!isHover);
    }
    function leave() {
        setIsHover(!isHover);
    }

    return (
        <div className="BasketItem container-fluid" onMouseEnter={hover} onMouseLeave={leave}>
            <div className="row">
                <div className="ImageBox col-lg-2 col-md-2 col-sm-3 col-xs-5">
                    <img src={`http://localhost:3000/media/Products/${product.img}`} alt="prInfo" />
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
                        <span>{Text.inputCount}</span>
                        <input
                            className="form-control"
                            type="number"
                            min="1"
                            defaultValue={count}
                            onChange={changeCount}
                        />
                        <span>{Text.inputAmount}</span>
                        <input
                            className="form-control"
                            type="number"
                            value={payPrice}
                            readOnly
                        /> ֏
                    </div>
                </div>
            </div>
            {isHover ? <button className="RemoveButton btn" onClick={removeItem}>
                            {Text.remove}
                        </button> : ''}
        </div>
    );
}

export default BasketItem;