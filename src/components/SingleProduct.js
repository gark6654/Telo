import React, { useEffect, useRef } from 'react';
import ToCartForm from './ToCartForm';

function SingleProduct(props) {
    const outRef = useRef(null);

    function collapseBox() {
        props.collapse();
    }

    // Effect for out side click for collapse.
    useEffect(() => {
        function outSideClick(event) {
            if (event.target === outRef.current) {
                collapseBox();
            }
        }

        document.addEventListener('mousedown', outSideClick);
    });

    return (
        <div ref={outRef} className="SingleProductWindow container-fluid">
            <article className="col-md-5">
                <button className="ExitButton" onClick={collapseBox}>
                    <img src="http://localhost:3000/media/Icon/cancel.svg" alt={"Logo"} />
                </button>
                <h1>
                    {props.product.name}
                </h1>
                <img 
                    className="SingleProductImg" 
                    src={`http://localhost:3000/media/Products/${props.product.img}`} 
                    alt="prd" 
                />
                <h3>
                    {props.product.desc}
                </h3>
                <h2 className="Price">
                    {props.product.price} ֏
                </h2>
                <ToCartForm product={props.product} collapse={collapseBox} />
            </article>
        </div>
    );
}

export default SingleProduct;