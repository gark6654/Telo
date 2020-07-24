import React from 'react';
import Product from './Product';

function ProductsBox(props) {
    return (
        <div className="row">
            <Product 
                name={"Persil"} 
                desc={"Persil 5kg Automatic Washing Pawder for color"}
                price={80}
                img={"persil.jpg"} 
            />
            <Product
                name={"Persil"}
                desc={"Persil 2.34L Liquid detergent for color"}
                price={70}
                img={"PersilLiquidDetergent.jpg"}
            />
        </div>
    )
}

export default ProductsBox;