import React from 'react';
import NavBar from './NavBar';
import Basket from './Basket';

function Header(props) {
    return (
        <header>
            <div className="HeaderTopPart row">
                <div className="HeaderLogoBox col-md-3 col-sm-3 col-xs-5">
                    <h1 className="SiteName">URARTU.<b>GE</b></h1>
                </div>
                <Basket />
            </div>
            <div className="HeaderBottomPart">
                <NavBar />                
            </div>
        </header>
    );
}

export default Header;