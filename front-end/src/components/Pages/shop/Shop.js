import React, { useEffect, useState, useContext } from 'react';
import { SiteText } from '../../../App';
import Categories from './Categories';
import Filters from './Filters';
import ProductsBox from './ProductsBox';
import FilterEraser from './FilterEraser';
import { Filter } from '../../../Icons';

function Shop(props) {
    // ToCartForm part text sorted by language.
    const Text = useContext(SiteText).content.pages.shop.filterPart;

    // UI For Filters collapse.
    const [windowW, setWindowW] = useState(window.innerWidth);
    const siteLang = localStorage.getItem('lang');

    useEffect(() => {
        window.addEventListener('resize', () => {
            setWindowW(window.innerWidth);
        });

        (function setupFilterStorage() {
            const sessionBasket = sessionStorage.getItem('filters');
            if (sessionBasket) {
                setFilters(JSON.parse(sessionStorage.getItem('filters')));
            }
            else {
                sessionStorage.setItem('filters', JSON.stringify([]));
            }
        })();
    }, [props]);

    // FIlters for show products.
    const [filters, setFilters] = useState({
        "category": null,
        "maxPrice": null
    });

    // Set filters to session storage.
    useEffect(() => {
        sessionStorage.setItem('filters', JSON.stringify(filters));
    }, [filters]);

    function setCategory(category) {
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

    function unSetCategory() {
        setFilters({
            "category": null,
            "maxPrice": filters.maxPrice
        });
    }

    function unSetMax() {
        setFilters({
            "category": filters.category,
            "maxPrice": null
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
                    <div className="FilterController">
                        {
                            filters.category ?
                                <FilterEraser title={
                                    filters.category.Title[siteLang]
                                } unSet={unSetCategory} />
                                // ELSE
                                : ''
                        }
                        {
                            !filters.maxPrice ? ''
                                // ELSE
                                :
                                <FilterEraser title={`${
                                    Text.to
                                    }: ${filters.maxPrice} ֏`} unSet={unSetMax} />
                        }
                    </div>
                    <Categories changeCategory={setCategory} />
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