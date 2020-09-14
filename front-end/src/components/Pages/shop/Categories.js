import React, { useContext } from 'react';
import { SiteText } from '../../../App';

function Categories(props) {
    // Filters part text sorted by language.
    const Text = useContext(SiteText).content.pages.shop.categoryTitle; 

    const categories = [
        {
            "name": "Washing Powder",
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
                        categories.map((category, id) => (
                            <li key={id}>
                                <button 
                                    className="CategoryButton btn" 
                                    onClick={() => {props.changeCategory(category.name)}} 
                                >
                                    <img 
                                        src={`http://localhost:3000/media/Icons/${category.img}`} 
                                        alt="icon" 
                                    />
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