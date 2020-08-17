import React, { useContext } from 'react';
import { SiteText } from '../App';

function Categories(props) {
    const Text = useContext(SiteText).content.pages.shop.categoryTitle; // Filters part text sorted by language.
    const categories = [
        {
            "name": "Washing Pawder",
            "img": "powder.svg"
        },
        {
            "name": "Washing Gel",
            "img": "laundry-service.svg"
        },
        {
            "name": "Soap",
            "img": "Soap.svg"
        },
        {
            "name": "Liquid Soap",
            "img": "LiquidSoap.svg"
        },
        {
            "name": "Shampoo",
            "img": "shampoo.svg"
        },
        {
            "name": "Dishwashing liquid",
            "img": "dish.svg"
        },
        {
            "name": "Bleach, stain remover",
            "img": "Bleach.svg"
        }
    ];

    return (
        <div className="CategoriesBox">
            <div className="Title">
                <h5>{Text}</h5>
            </div>
            <div>
                <ul>
                    {
                        categories.map((category) => (
                            <li>
                                <button className="CategoryButton btn">
                                    <img src={`http://localhost:3000/media/Icons/${category.img}`} alt="Logo" />
                                    <span>{category.name}</span>
                                </button>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}

export default Categories;