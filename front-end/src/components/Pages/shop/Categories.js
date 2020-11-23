import React, { useContext, useState, useEffect } from 'react';
import { SiteText } from '../../../App';
import Icons from '../../../Icons';

function Categories(props) {
    // Filters part text sorted by language.
    const Text = useContext(SiteText).content.pages.shop.categoryTitle;
    const SiteLang = localStorage.getItem('lang');

    const [categories, setCategories] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(response => response.json())
            .then(data => setCategories([...data]))
            .catch(error => console.error(error));
    }, [props]);

    return (
        <div className="CategoriesBox">
            <div className="Title">
                <h5>{Text}</h5>
            </div>
            <div>
                <ul>
                    {categories ?
                        categories.map((category, id) => (
                            <li key={id}>
                                <button
                                    className="CategoryButton btn"
                                    onClick={() => { props.changeCategory(category) }}
                                >
                                    <img
                                        src={`http://localhost:5000/Icons/${category.Img}`}
                                        alt="icon"
                                    />
                                    <span>
                                        {category.Title[SiteLang]}
                                    </span>
                                </button>
                            </li>
                        ))
                        : ''
                    }
                </ul>
            </div>
        </div>
    );
}

export default Categories;