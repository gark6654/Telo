import React from 'react';
import Slider from '../slider/Slider';
import Product from '../Product';

function Home(props) {
    return (
        <div>
            <h1>Home page</h1>
            <div>
                <Slider autoPlay={true} duration={5}>
                    <img src="http://localhost:3000/media/banner1.png" alt="img" />
                    <img src="http://localhost:3000/media/banner1.png" alt="img" />
                </Slider>
            </div>
            <div className="container-fluid">
            </div>
        </div>
    );
}

export default Home;