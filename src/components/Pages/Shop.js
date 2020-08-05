import React, { useEffect, useState, useContext } from 'react';
import { SiteText } from '../../App';
import Categories from '../Categories';
import Filters from '../Filters';
import ProductsBox from '../ProductsBox';

function Shop(props) {
    const Text = useContext(SiteText).pages.shop.filterPart; // ToCartForm part text sorted by language.

    const [windowW, setWindowW] = useState(window.innerWidth); // UI For Filters collapse. 

    useEffect(() => {
        window.addEventListener('resize', () => {
            setWindowW(window.innerWidth);
        });
    }, [props]);

    return (
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
                            <img src="http://localhost:3000/media/Icons/Filter.svg" alt="Logo" width="20" />
                        </span> {Text.title}
                    </label>
                </button> : ''
            }

            <aside className={`FiltersPart ${windowW <= 768 ? 'collapse' : 'col-md-auto'}`} id="CollapseFilters">
                <Categories />
                <Filters />
            </aside>
            <div className="ProductsPart col-md">
                <ProductsBox />
            </div>
        </div>
    );
}

export default Shop;