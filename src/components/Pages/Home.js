import React from 'react';
import Banner from '../../media/Banner.jpg';

function Home(props) {
    return (
        <div>
            <div className="Banner">
                <img src={Banner} alt="banner" />
            </div>
            <div className="container-fluid">
                <h2>Ինչու՞ ընտրել մեզ </h2>
            </div>
        </div>
    );
}

export default Home;