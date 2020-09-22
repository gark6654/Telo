import React, { useState, useContext, useEffect } from 'react';
import { SiteProducts } from '../../../App';
import Product from './Product';

function ProductsBox(props) {
    const [show, setShow] = useState([]);
    const products = useContext(SiteProducts);

    const descLang = localStorage.getItem('lang');
    const filters = props.filters;

    useEffect(() => {
        var filtratedItems = products;
        if (filters.category) {
            filtratedItems = filtratedItems.filter(item => item.Category === filters.category.Name);
        }
        if (filters.maxPrice) {
            filtratedItems = filtratedItems.filter(item => parseInt(item.Price) <= filters.maxPrice);
        }

        setShow(filtratedItems);
    }, [props]);

    return (
        <div className="row">
            {
                show.length !== 0 ?
                    show.map((product, id) => (
                        <Product
                            key={id}
                            name={product.Name}
                            desc={product.Desc}
                            price={product.Price}
                            cat={product.Category}
                            img={product.Img}
                            count={product.Count}
                        />
                    ))
                    : // ELSE
                    <div className="alert alert-info" role="alert">
                        <h3>
                            {
                                descLang === "РУС" ? "Не найдено товаров." :
                                    descLang === "ՀԱՅ" ? "Ապրանքներ չեն գտնվել։" :
                                            "Not found items."
                            }
                        </h3>
                    </div>
            }
        </div>
    )
}

export default ProductsBox;