import React, { useEffect, useState, useContext } from 'react';
import { SiteText } from '../../../App';
import Categories from './Categories';
import Filters from './Filters';
import ProductsBox from './ProductsBox';
import { Filter } from '../../../Icons';

function Shop(props) {
    // ToCartForm part text sorted by language.
    const Text = useContext(SiteText).content.pages.shop.filterPart;

    // UI For Filters collapse.
    const [windowW, setWindowW] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', () => {
            setWindowW(window.innerWidth);
        });
    }, [props]);

    // FIlters for show products.
    const [filters, setFilters] = useState({
        "category": null,
        "maxPrice": null
    });

    function changeCat(category) {
        setFilters({
            "category": category,
            "maxPrice": filters.maxPrice
        });
    }

    function setMax(max) {
        setFilters({
            "category": filters.category,
            "maxPrice": max
        });
    }

    return (
        <div className="container-fluid">
            <div className={`${windowW <= 768 ? '' : 'row'}`}>
                {
                    windowW <= 768 ? <button
                        className="btn FilterCollapseButton"
                        type="button"
                        data-toggle="collapse"
                        data-target="#CollapseFilters"
                        aria-expanded="false"
                        aria-controls="collapseExample"
                    >
                        <label>
                            <span>
                                <img src={Filter} alt="icon" width="20" />
                            </span> {Text.title}
                        </label>
                    </button> : ''
                }

                <aside
                    className={`FiltersPart ${windowW <= 768 ? 'collapse' : 'col-md-auto'}`}
                    id="CollapseFilters"
                >
                    <Categories changeCategory={changeCat} />
                    <Filters changeMax={setMax} />
                </aside>
                <div className="ProductsPart col-md">
                    <ProductsBox filters={filters} />
                </div>
            </div>
        </div>
    );
}

export default Shop;