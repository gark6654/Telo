import React from 'react';
import Dots from './Dots';

function Controller(props) {
    return(
        <article className="controller">
            <article>
                <Dots 
                    selectFromDot={props.selectDot} 
                    count={props.dotsCount} 
                    selected={props.selectedDot}  
                />
            </article>
            <button onClick={props.prev}>Prev</button>
            <button onClick={props.next}>Next</button>
        </article>
    );
}

export default Controller;