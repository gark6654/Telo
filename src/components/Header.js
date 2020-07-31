import React, { useContext } from 'react';
import { SiteText } from '../App';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import Basket from './Basket';

function Header(props) {    

    const Text = useContext(SiteText); // Header part text sorted by language.

    return (
        <header>
            <div className="HeaderTopPart row">
                <div className="HeaderLogoBox col-md-3 col-sm-3 col-xs-5">
                    <Link to="/">
                        <h1 className="SiteName">URARTU.<b>GE</b></h1>
                    </Link>
                </div>
                <Basket title={Text.basketTitle} />
            </div>
            <div className="HeaderBottomPart">
                <NavBar links={Text.navBar} />
            </div>
        </header>
    );
}

export default Header;