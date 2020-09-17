import React from 'react';
import { Cancel } from '../../../Icons';

function FilterEraser(props) {
    function erase() {
        props.unSet();
    }

    return (
        <div className="FilterEraser btn alert-info">
            <span>{props.title}</span>
            <button onClick={erase}>
                <img src={Cancel} alt="icon" width="10" height="10" />
            </button>
        </div>
    );
}

export default FilterEraser;