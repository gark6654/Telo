import React, { useState, useContext, useEffect } from 'react';
import { SiteProducts } from '../App';
import Product from './Product';

function ProductsBox(props) {
    const [show, setShow] = useState([]);
    const products = useContext(SiteProducts);

    useEffect(() => {
        setShow(products);
    }, [products]);

    return (
        <div className="row">
            {
                show.length !== 0 ? 
                show.map((product, id) => (
                    <Product
                        key={id}
                        name={product.name}
                        desc={product.desc}
                        price={product.price}
                        cat={product.category}
                        img={product.img}
                    />
                )) 
                : <h1>Not found.</h1>
            }
        </div>
    )
}

export default ProductsBox;