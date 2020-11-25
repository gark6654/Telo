import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import Basket from './Basket';

function Header(props) {  
    return (
        <header>
            <div className="HeaderTopPart row">
                <div className="HeaderLogoBox col-md-3 col-sm-3 col-xs-5">
                    <Link to="/">
                        <h1 className="SiteName">SiteName.<b>am</b></h1>
                    </Link>
                </div>
                <Basket length={props.basketLength} />
            </div>
            <div className="HeaderBottomPart">
                <NavBar />
            </div>
        </header>
    );
}

export default Header;