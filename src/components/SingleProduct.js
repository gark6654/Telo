import React from 'react';
import ExitIcon from '../media/cancel.svg';
import ToCartForm from './ToCartForm';

function SingleProduct(props) {
    function collapseBox() {
        props.collapse();
    }

    return (
        <div className="SingleProductWindow container-fluid">
            <article className="col-md-5">
                <button className="ExitButton" onClick={collapseBox}>
                    <img src={ExitIcon} alt={"Logo"} />
                </button>
                <h1>
                    {props.product.name}
                </h1>
                <img src={`http://localhost:3000/media/Products/${props.product.img}`} alt="prd" />
                <h3>
                    {props.product.desc}
                </h3>
                <h2 className="Price">
                    {props.product.price} ֏
                </h2>
                <ToCartForm product={props.product} />
            </article>
        </div>
    );
}

export default SingleProduct;