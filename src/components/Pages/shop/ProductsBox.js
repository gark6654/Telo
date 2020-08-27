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
            filtratedItems = filtratedItems.filter(item => item.category === filters.category);
        }
        if (filters.maxPrice) {
            filtratedItems = filtratedItems.filter(item => item.price <= filters.maxPrice);
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
                            desc={
                                descLang === "ENG" ? product.Desc.EN :
                                    descLang === "РУС" ? product.Desc.RU :
                                        descLang === "ՀԱՅ" ? product.Desc.AM : ''
                            }
                            price={product.Price}
                            cat={product.Category}
                            img={product.Img}
                            count={product.Count}
                        />
                    ))
                    : <h1>
                        {
                            descLang === "ENG" ? "Not found items." :
                                descLang === "РУС" ? "Не найдено товаров." :
                                    descLang === "ՀԱՅ" ? "Ապրանքներ չեն գտնվել։" : 'ERROR 505'
                        }
                    </h1>
            }
        </div>
    )
}

export default ProductsBox;