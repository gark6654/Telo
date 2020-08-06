import React from 'react';
import Slider from '../slider/Slider';
import Product from '../Product';

function Home(props) {
    return (
        <div>
            <div>
                <Slider autoPlay={true} duration={5}>
                <img src="https://preview.redd.it/u105ro5rg8o31.jpg?auto=webp&s=762f11d489021e560e760ea13702fad955b291f1" alt="img" />
                    <img src="https://preview.redd.it/u105ro5rg8o31.jpg?auto=webp&s=762f11d489021e560e760ea13702fad955b291f1" alt="img" />
                </Slider>
            </div>
            <div className="container-fluid">
                <h1>Home page</h1>
            </div>
        </div>
    );
}

export default Home;