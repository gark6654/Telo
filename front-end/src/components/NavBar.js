import React, { useContext } from 'react';
import { SiteText } from '../App';
import { Link } from 'react-router-dom';
import LangSelector from './LangSelector';

function NavBar(props) {
    const Text = useContext(SiteText).header.navBar; // Navbar part text sorted by language.

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
                        <Link
                            to="/" className="nav-link">
                                {Text.navLinks.home}
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/Shop/" className="nav-link">
                                {Text.navLinks.shop}
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/Order+Delivery/" className="nav-link">
                                {Text.navLinks.orderInfo}
                        </Link>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0" onSubmit={search}>
                    <input
                        className="form-control mr-sm-2"
                        type="search"
                        placeholder={Text.searchTitle + '..'}
                        aria-label="Search"
                    />
                    <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">
                        {Text.searchTitle}
                    </button>
                </form>
                <LangSelector />
            </div>
        </nav>
    );
}

export default NavBar;  