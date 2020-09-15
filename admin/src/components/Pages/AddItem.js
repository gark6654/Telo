import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function AddItem(props) {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState({
        "EN": "",
        "RU": "",
        "AM": ""
    });
    const [count, setCount] = useState('');
    const [category, setCategory] = useState('');
    const [img, setImg] = useState('');

    function add(event) {
        event.preventDefault();
        const data = { name, price, description, count, category, img }

        fetch("http://localhost:5000/add_product",
            {
                method: 'POST',
                body: JSON.stringify({
                    item: data
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(resp => {
                // Refresh page
                window.location.reload(false);
            });
    }

    return (
        <div className="AddPage container">
            <button className="btn btn-primary">
                <Link to='/'>
                    Գլխավոր
                </Link>
            </button>
            <form onSubmit={add}>
                <div className="form-group">
                    <span>Անվանում</span>
                    <input
                        className="form-control"
                        type="text"
                        required
                        onChange={(event) => {
                            setName(event.target.value);
                        }}
                    />
                </div>
                <div className="form-group">
                    <span>Արժեք</span>
                    <input
                        className="form-control"
                        type="number"
                        required
                        onChange={(event) => {
                            setPrice(event.target.value);
                        }} />
                </div>
                <div className="form-group">
                    <span>Մեկնաբանություն</span>
                    <div className="DescriptionBox">
                        <h6>ENG</h6>
                        <textarea id="ENG" onChange={(event) => {
                            setDescription({
                                "EN": event.target.value,
                                "RU": description.RU,
                                "AM": description.AM,
                            });
                        }}></textarea>
                        <h6>RUS</h6>
                        <textarea id="RUS" onChange={(event) => {
                            setDescription({
                                "EN": description.EN,
                                "RU": event.target.value,
                                "AM": description.AM,
                            });
                        }}></textarea>
                        <h6>ARM</h6>
                        <textarea id="ARM" onChange={(event) => {
                            setDescription({
                                "EN": description.EN,
                                "RU": description.RU,
                                "AM": event.target.value,
                            });
                        }}></textarea>
                    </div>
                </div>
                <div className="form-group">
                    <span>Քանակ</span>
                    <input
                        className="form-control"
                        type="number"
                        required
                        min="0"
                        onChange={(event) => {
                            setCount(event.target.value);
                        }} />
                </div>
                <div className="form-group">
                    <span>Կատեգորիա</span>
                    <br />
                    <select
                        onChange={(event) => {
                            setCategory(event.target.value);
                        }}
                    >
                        <option></option>
                        <option>Washing Powder</option>
                        <option>Washing Gel</option>
                    </select>
                </div>
                <div className="form-group">
                    <input
                        className="form-control"
                        type="file"
                        required
                        accept=".jpg, .jpeg, .png"
                        onChange={(event) => {
                            setImg(event.target.files[0].name);
                        }}
                    />
                </div>
                <button className="btn btn-success">Ավելացնել</button>
            </form>
        </div>
    )
}

export default AddItem;