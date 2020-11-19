import React, { useEffect, useState, useContext } from 'react';
import { SiteText, SiteProducts } from '../../App';
import Product from './shop/Product';

function Search(props) {
    const Text = useContext(SiteText).content.pages.search;
    const Products = useContext(SiteProducts);
    const [text, setText] = useState('');

    useEffect(() => {
        setText(sessionStorage.getItem('search'));
        console.log();
    }, [props]);

    return (
        <div className="container-fluid">
            <h4 className="alert alert-primary">{Text.title + ' ' + text}</h4>
            <div className="container SearchProducts">
                <div className="row">
                    {
                        Products.filter(product => product.Name.indexOf(text) > -1).map((product, id) => (
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
                    }
                </div>
            </div>
        </div>
    );
}

export default Search;