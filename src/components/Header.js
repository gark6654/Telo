import React from 'react';
import NavBar from './NavBar';

function Header(props) {
    return (
        <header>
            <div className="HeaderLogoBox col-md-3">
                <h1 className="SiteName">URARTU.<b>GE</b></h1>
            </div>
            <NavBar />
        </header>
    );
}

export default Header;