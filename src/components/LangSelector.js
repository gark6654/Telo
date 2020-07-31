import React, { useContext } from 'react';
import { changeLang } from '../App';

function LangSelector(props) {
    const changeLanguage = useContext(changeLang); // Function called from App component.

    function change(event) {
        changeLanguage(event.target.value);
    }

    return (
        <select className="LangSelector" onChange={change} value={localStorage.getItem('lang')}>
            <option>ENG</option>
            <option>РУС</option>
            <option>ՀԱՅ</option>
        </select>
    );
}

export default LangSelector;