import React, { useContext } from 'react';
import { SiteText } from '../App';

function Categories(props) {
    const Text = useContext(SiteText).content.pages.shop.categoryTitle; // Filters part text sorted by language.

    return (
        <div className="CategoriesBox">
            <div className="Title">
                <h5>{Text}</h5>
            </div>
            <div>
                <ul>
                    <li>
                        <button className="CategoryButton btn">
                            <img src={"http://localhost:3000/media/Icons/powder.svg"} alt="Logo" />
                            <span>Washing powder</span>
                        </button>
                    </li>
                    <li>
                        <button className="CategoryButton btn">
                            <img src={"http://localhost:3000/media/Icons/laundry-service.svg"} alt="Logo" />
                            <span>Washing Gel</span>
                        </button>
                    </li>
                    <li>
                        <button className="CategoryButton btn">
                            <img src={"http://localhost:3000/media/Icons/Soap.svg"} alt="Logo" />
                            <span>Soap</span>
                        </button>
                    </li>
                    <li>
                        <button className="CategoryButton btn">
                            <img src={"http://localhost:3000/media/Icons/LiquidSoap.svg"} alt="Logo" />
                            <span>Liquid Soap</span>
                        </button>
                    </li>
                    <li>
                        <button className="CategoryButton btn">
                            <img src={"http://localhost:3000/media/Icons/shampoo.svg"} alt="Logo" />
                            <span>Shampoo</span>
                        </button>
                    </li>
                    <li>
                        <button className="CategoryButton btn">
                            <img src={"http://localhost:3000/media/Icons/dish.svg"} alt="Logo" />
                            <span>Dishwashing liquid</span>
                        </button>
                    </li>
                    <li>
                        <button className="CategoryButton btn">
                            <img src={"http://localhost:3000/media/Icons/Bleach.svg"} alt="Logo" />
                            <span>Bleach, stain remover</span>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Categories;