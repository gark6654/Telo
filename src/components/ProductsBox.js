import React, { useContext } from 'react';
import { SiteProducts } from '../App';
import Product from './Product';

function ProductsBox(props) {
    const products = useContext(SiteProducts);

    return (
        <div className="row">
            {
                products.map((product, id) => (
                    <Product
                        key={id}
                        name={product.name}
                        desc={product.desc}
                        price={product.price}
                        img={product.img}
                    />
                ))
            }
        </div>
    )
}

export default ProductsBox;