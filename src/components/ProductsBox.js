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
            <Product
                name={"Gillette Fusion5 PROSHIELD"}
                desc={"Gillette Fusion5 ProShield Men's Razor features 5 anti-friction blades"}
                price={60}
                img={"GilletteFusion5.jpg"}  
            />
        </div>
    )
}

export default ProductsBox;