import React from 'react';
import Product from './Product';

function ProductsBox(props) {
    return (
        <div className="row">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
        </div>
    )
}

export default ProductsBox;