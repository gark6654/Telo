import React from 'react';

function SingleProduct(props) {
    return (
        <div className="SingleProductWindow container-fluid">
            <article className="col-md-5">
                <h1>
                    {props.product.name}
                </h1>
            </article>
        </div>
    );
}

export default SingleProduct;