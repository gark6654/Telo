import React, { useState, useEffect } from 'react';

function Dots(props) {
    const [count, setCount] = useState(0);
    const [selected, setSelected] = useState(0);

    useEffect(() => {
        setCount(props.count);
        setSelected(props.selected);
    }, [props]);

    function selectDot(id) {
        props.selectFromDot(id);
    }

    const button = [];
    for (let i = 0; i < count; i++) {
        button.push(
            <button 
                key={i} 
                className={`dot ${(selected === i) ? 'selectedDot' : ''}`} 
                onClick={() => {selectDot(i)}}>   
            </button>
        );
    }

    return(
        <article className="dotsBox">
            {button}
        </article>
    );
}

export default Dots;