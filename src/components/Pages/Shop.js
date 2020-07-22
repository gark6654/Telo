import React, { useEffect, useState } from 'react';
import Categories from '../Categories';
import Filters from '../Filters';
import FilterIcon from '../../media/filter.svg'

function Shop(props) {
    const [windowW, setWindowW] = useState(window.innerWidth); // UI For Filters collapse. 

    useEffect(() => {
        window.addEventListener('resize', () => {
            setWindowW(window.innerWidth);
        });
    });

    return (
        <div className="row">
            {
                windowW < 768 ? <button
                    className="btn FilterCollapseButton"
                    type="button"
                    data-toggle="collapse"
                    data-target="#CollapseFilters"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                >
                    <label>
                        <span><img src={FilterIcon} alt="Logo" width="20" /></span> Filters
                    </label>
                </button> : ''
            }

            <aside className={`FiltersPart col-md-auto ${windowW < 768 ? 'collapse' : ''}`} id="CollapseFilters">
                <Categories />
                <Filters />
            </aside>
            <div className="col-md">

            </div>
        </div>
    );
}

export default Shop;