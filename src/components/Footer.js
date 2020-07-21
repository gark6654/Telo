import React from 'react';
import GeoIcon from '../media/map.svg';
import PhoneIcon from '../media/phone.svg';
import MailIcon from '../media/email.svg';

function Footer(props) {
    return (
        <footer>
            <div className="FooterTopPart">
                <div className="FooterContacts row">
                    <div className="AddressBox col-md">
                        <img src={GeoIcon} alt="address" width="25" />
                        <span>Address:</span>
                        <p>Georgia</p>
                    </div>
                    <div className="PhoneBox col-md">
                        <img src={PhoneIcon} alt="phone" width="25" />
                        <span>Phone:</span>
                        <p>+995 599 56 03 91</p>
                    </div>
                    <div className="MailBox col-md">
                        <img src={MailIcon} alt="mail" width="25" />
                        <span>E-mail:</span>
                        <p>urartu@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className="FooterBottomPart">
                <p>
                    &copy; {new Date().getFullYear()} Urartu.ge All Right Reserved
                </p>
            </div>
        </footer>
    );
}

export default Footer;