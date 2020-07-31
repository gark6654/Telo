import React, { useContext } from 'react';
import { SiteText } from '../App';
import SoapIcon from '../media/Soap.svg';
import LiquidSoapIcon from '../media/LiquidSoap.svg';
import ShampooIcon from '../media/shampoo.svg';

function Categories(props) {
    const Text = useContext(SiteText).pages.shop.categoryTitle; // Filters part text sorted by language.

    return (
        <div className="CategoriesBox">
            <div className="Title">
                <h5>{Text}</h5>
            </div>
            <div>
                <ul>
                    <li>
                        <button className="CategoryButton btn">
                            <img src={SoapIcon} alt="Logo" />
                            <span>Soap</span>
                        </button>
                    </li>
                    <li>
                        <button className="CategoryButton btn">
                            <img src={LiquidSoapIcon} alt="Logo" />
                            <span>Liquid Soap</span>
                        </button>
                    </li>
                    <li>
                        <button className="CategoryButton btn">
                            <img src={ShampooIcon} alt="Logo" />
                            <span>Shampoo</span>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Categories;