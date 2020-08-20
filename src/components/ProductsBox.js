import React, { useState, useContext, useEffect } from 'react';
import { SiteProducts } from '../App';
import Product from './Product';

function ProductsBox(props) {
    const [show, setShow] = useState([]);
    const products = useContext(SiteProducts);

    const filters = props.filters;

    useEffect(() => {
        var filtratedItems = products;
        if (filters.category) {
            filtratedItems = filtratedItems.filter(item => item.category === filters.category);
        }
        if (filters.maxPrice) {
            filtratedItems = filtratedItems.filter(item => item.price <= filters.maxPrice);
        }

        console.log(filtratedItems);

        setShow(filtratedItems);
    }, [props]);

    

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