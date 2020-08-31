import React, { useEffect, useRef } from 'react';
import ToCartForm from './ToCartForm';
import { Cancel } from '../../../Icons';


function SingleProduct(props) {
    const outRef = useRef(null);

    const descLang = localStorage.getItem('lang');

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
                    <img src={Cancel} alt="icon" />
                </button>
                <h2>
                    {props.product.name}
                </h2>
                <img
                    className="SingleProductImg"
                    src={`http://localhost:3000/media/Products/${props.product.img}`}
                    alt="logo"
                />
                <p>
                    {
                        descLang === "РУС" ? props.product.desc.RU :
                            descLang === "ՀԱՅ" ? props.product.desc.AM :
                                props.product.desc.EN
                    }
                </p>
                {/* <span className="btn btn-warning">
                    {props.product.category}
                </span> */}
                <h4 className="Price">
                    {props.product.price} ֏
                </h4>
                <ToCartForm product={props.product} collapse={collapseBox} />
            </article>
        </div>
    );
}

export default SingleProduct;