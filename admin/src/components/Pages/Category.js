import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Category(props) {
    const [categories, setCategories] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(response => response.json())
            .then(data => setCategories([...data]))
            .catch(error => console.error(error));
    }, [props]);

    return (
        <div className="CategoryPage container">
            <button className="btn btn-primary">
                <Link to='/'>
                    Գլխավոր
                </Link>
            </button>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>EN</th>
                        <th>RU</th>
                        <th>AM</th>
                    </tr>
                </thead>
                <tbody>
                    {categories ? categories.map((category, id) => (
                        <tr key={id}>
                            <td>{category.Name}</td>
                            <td>
                                <input
                                    type="text"
                                    defaultValue={category.Title.EN}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    defaultValue={category.Title.RU}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    defaultValue={category.Title.AM}
                                />
                            </td>
                        </tr>
                    )) : <tr><td>Error</td></tr>}
                </tbody>
            </table>
            <h3>Ավելացնել նոր կատեգորիա</h3>
            <form>
                <div className="form-group">
                    <span>EN</span>
                    <input type="text" className="form-control" required />
                    <span>RU</span>
                    <input type="text" className="form-control" required />
                    <span>AM</span>
                    <input type="text" className="form-control" required />
                    <span>Նկար (.svg)</span>
                    <input type="file" className="form-control" required accept=".svg" /> 
                </div>
            </form>
        </div>
    );
}

export default Category; 