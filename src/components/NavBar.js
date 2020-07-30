import React from 'react';
import { Link } from 'react-router-dom';

function NavBar(props) {
    
    function search(event) {
        event.preventDefault();
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button 
                className="navbar-toggler float-right" 
                type="button" 
                data-toggle="collapse" 
                data-target="#navbarSupportedContent" 
                aria-controls="navbarSupportedContent" 
                aria-expanded="false" 
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item ">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Shop/" className="nav-link">Shop</Link>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0" onSubmit={search}>
                    <input 
                        className="form-control 
                        mr-sm-2" 
                        type="search" 
                        placeholder="Search" 
                        aria-label="Search" 
                    />
                    <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    );
}

export default NavBar;  