import React from 'react';
import Categories from '../Categories';

function Shop(props) {
    return (
        <div className="row">
            <aside className="FiltersPart col-md-auto">
                <Categories />
                <div>
                    Filters
                </div>
            </aside>
            <div className="col-md">

            </div>
        </div>
    );
}

export default Shop;