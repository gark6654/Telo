import React from 'react';
import Product from './Product';

function ProductsBox(props) {
    return (
        <div className="row">
            <Product
                name={"Persil 5kg"}
                desc={"Persil 5kg Automatic Washing Pawder for color"}
                price={11000}
                img={"persil.jpg"}
            />
            <Product
                name={"Persil"}
                desc={"Persil 2.34L Liquid detergent for color"}
                price={8500}
                img={"PersilLiquidDetergent.jpg"}
            />
            <Product
                name={"Gillette Fusion5 PROSHIELD"}
                desc={"Gillette Fusion5 ProShield Men's Razor features 5 anti-friction blades"}
                price={12000}
                img={"GilletteFusion5.jpg"}  
            />
            <Product
                name={"Persil"}
                desc={"Persil 2.34L Liquid detergent for color"}
                price={8500}
                img={"PersilLiquidDetergent.jpg"}
            />
            <Product
                name={"Gillette Fusion5 PROSHIELD"}
                desc={"Gillette Fusion5 ProShield Men's Razor features 5 anti-friction blades"}
                price={12000}
                img={"GilletteFusion5.jpg"}  
            />
            <Product
                name={"Persil"}
                desc={"Persil 2.34L Liquid detergent for color"}
                price={8500}
                img={"PersilLiquidDetergent.jpg"}
            />
            <Product
                name={"Gillette Fusion5 PROSHIELD"}
                desc={"Gillette Fusion5 ProShield Men's Razor features 5 anti-friction blades"}
                price={12000}
                img={"GilletteFusion5.jpg"}  
            />
            <Product
                name={"Persil"}
                desc={"Persil 2.34L Liquid detergent for color"}
                price={8500}
                img={"PersilLiquidDetergent.jpg"}
            />
            <Product
                name={"Gillette Fusion5 PROSHIELD"}
                desc={"Gillette Fusion5 ProShield Men's Razor features 5 anti-friction blades"}
                price={12000}
                img={"GilletteFusion5.jpg"}  
            />
            
            
        </div>
    )
}

export default ProductsBox;