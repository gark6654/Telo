import React, { useContext } from 'react';
import { changeLang } from '../App';

function LangSelector(props) {
    const changeLanguage = useContext(changeLang); // Function called from App component.

    const selectedLanguage = localStorage.getItem('lang') || 'ENG';

    function change(event) {
        changeLanguage(event.target.value);
    }

    return (
        <select className="LangSelector" onChange={change} value={selectedLanguage}>
            <option>ENG</option>
            <option>РУС</option>
            <option>ՀԱՅ</option>
        </select>
    );
}

export default LangSelector;