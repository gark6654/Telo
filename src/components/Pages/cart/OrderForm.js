import React, { useContext, useState } from 'react';
import { SiteText } from '../../../App';

function OrderForm(props) {
    // Page Text sorted by selected language.
    const Text = useContext(SiteText).content.pages.cart.orderForm;

    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [phone, setPhone] = useState(null);
    const [address, setAddress] = useState(null);
    const [payType, setPayType] = useState(null);

    function submit(event) {
        event.preventDefault();
        if (phone) {
            const data = {
                firstName: firstName,
                lastName: lastName,
                phone: phone,
                address: address,
                payType: payType
            };
            props.buy(data);
        }
        else {
            console.log('Error');
        }
    }

    return (
        <div className="OrderBox">
            <h2>{Text.title}</h2>
            <form onSubmit={submit}>
                <div className="form-row">
                    <div className="col">
                        <span>{Text.form.first}:</span>
                        <input
                            required
                            type="text"
                            className="form-control"
                            placeholder="John"
                            onChange={(event) => { setFirstName(event.target.value) }}
                        />
                    </div>
                    <div className="col">
                        <span>{Text.form.last}:</span>
                        <input
                            required
                            type="text"
                            className="form-control"
                            placeholder="Whick"
                            onChange={(event) => { setLastName(event.target.value) }}
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="col">
                        <span>{Text.form.phone}:</span>
                        <input
                            required
                            className="form-control"
                            type="text"
                            placeholder="+374000000"
                            defaultValue={"+374"}
                            minLength="12"
                            onChange={(event) => { setPhone(event.target.value) }}
                        />
                    </div>
                    <div className="col">
                        <span>{Text.form.address}:</span>
                        <input
                            required
                            className="form-control"
                            type="text"
                            placeholder="Armenia, Yerevan, Halabyan 51"
                            onChange={(event) => { setAddress(event.target.value) }}
                        />
                    </div>
                </div>
                <div className="PaymentType form-group">
                    <h4>{Text.form.sort.title}</h4>
                    <div className="form-check">
                        <input
                            required
                            className="form-check-input"
                            type="radio"
                            name="exampleRadios"
                            id="exampleRadios1"
                            value="Cash"
                            onChange={(event) => { setPayType(event.target.value) }}
                        />
                        <label className="form-check-label" htmlFor="exampleRadios1">
                            {Text.form.sort.cash}
                            <img
                                src="http://localhost:3000/media/Icons/money.svg"
                                width="30"
                                alt="logo"
                            />
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            required
                            className="form-check-input"
                            type="radio"
                            name="exampleRadios"
                            id="exampleRadios2"
                            value="Card"
                            onChange={(event) => { setPayType(event.target.value) }}
                        />
                        <label className="form-check-label" htmlFor="exampleRadios2">
                            {Text.form.sort.card}
                            <img
                                src="http://localhost:3000/media/Icons/credit-card.svg"
                                width="30"
                                alt="logo"
                            />
                        </label>
                    </div>
                </div>
                <div className="alert alert-danger" role="alert">
                    <h4>{Text.form.rights}</h4>
                </div>
                <button className="btn btn-primary">
                    {Text.form.buy}
                </button>
            </form>
        </div>
    );
}

export default OrderForm;