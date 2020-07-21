import React from 'react';
import Categories from '../Categories';
import Filters from '../Filters';

function Shop(props) {
    return (
        <div className="row">
            <aside className="FiltersPart col-md-auto">
                <Categories />
                <Filters />
            </aside>
            <div className="col-md">

            </div>
        </div>
    );
}

export default Shop;