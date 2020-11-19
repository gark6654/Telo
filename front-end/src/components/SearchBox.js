import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

function SearchBox(props) {
    const [value, setValue] = useState('');
    const [redirect, setRedirect] = useState(false);

    function change(event) {
        setValue(event.target.value);
        setRedirect(false);
    }

    function submit(event) {
        event.preventDefault();
        sessionStorage.setItem('search', value);
        if (document.location.pathname === '/search/') {
            document.location.reload();
        }
        else {
            setRedirect(true);
        }
    }

    return (
        <form className="form-inline my-2 my-lg-0" onSubmit={submit}>
            <input
                className="form-control mr-sm-2"
                type="search"
                placeholder={props.searchTitle + '..'}
                aria-label="Search"
                defaultValue={value}
                onChange={change}
            />
            <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">
                {props.searchTitle}
            </button>
            {
                redirect ? <Redirect to="/search/" /> : ''
            }
        </form>
    );
}

export default SearchBox;