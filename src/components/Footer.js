import React, { useContext } from 'react';
import { SiteText } from '../App';

// Site icons
import {Map, Phone, Email} from '../Icons';

function Footer(props) {
    const Text = useContext(SiteText).footer; // Footer part text sorted by language.

    return (
        <footer>
            <div className="FooterTopPart">
                <div className="FooterContacts row">
                    <div className="AddressBox col-md">
                        <img src={Map} alt="icon" width="25" />
                        <span>{Text.address.title}:</span>
                        <p>{Text.address.address}</p>
                    </div>
                    <div className="PhoneBox col-md">
                        <img src={Phone} alt="icon" width="25" />
                        <span>{Text.phoneTitle}:</span>
                        <p>+374 55 97 79 39</p>
                    </div>
                    <div className="MailBox col-md">
                        <img src={Email} alt="icon" width="25" />
                        <span>{Text.mailTitle}:</span>
                        <p>urartu@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className="FooterBottomPart">
                <p>
                    &copy; {new Date().getFullYear()} Urartu.ge {Text.rights}.
                </p>
            </div>
        </footer>
    );
}

export default Footer;