import React from 'react';
import CategoryBox from '../Categories';
import Filters from '../Filters';

function Home(props) {
    return (
        <div className="row">
            <aside className="col-md-auto">
                <CategoryBox />
                <Filters />
            </aside>
            <div className="col-md">

            </div>
        </div>
    );
}

export default Home;