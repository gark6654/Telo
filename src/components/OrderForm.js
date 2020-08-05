import React, { useContext } from 'react';
import { SiteText } from '../App';

function OrderForm(props) {
    const Text = useContext(SiteText).pages.cart.orderForm;


    return (
        <div className="OrderBox">
            <h2>{Text.title}</h2>
            <form>
                <div className="form-row">
                    <div className="col">
                        <span>{Text.form.first}:</span>
                        <input required type="text" className="form-control" placeholder="John" />
                    </div>
                    <div className="col">
                        <span>{Text.form.last}:</span>
                        <input required type="text" className="form-control" placeholder="Whick" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="col">
                        <span>{Text.form.phone}:</span>
                        <input required className="form-control" type="text" placeholder="+374000000" defaultValue={"+374"} />
                    </div>
                    <div className="col">
                        <span>{Text.form.address}:</span>
                        <input required className="form-control" type="text" placeholder="+374000000" />
                    </div>
                </div>
                <div className="PaymentSort form-group">
                    <h4>{Text.form.sort.title}</h4>
                    <div className="form-check">
                        <input
                            required
                            className="form-check-input"
                            type="radio"
                            name="exampleRadios"
                            id="exampleRadios1"
                            value="option1"
                        />
                        <label className="form-check-label" htmlFor="exampleRadios1">
                            {Text.form.sort.cash}
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            required
                            className="form-check-input"
                            type="radio"
                            name="exampleRadios"
                            id="exampleRadios2"
                            value="option2"
                        />
                        <label className="form-check-label" htmlFor="exampleRadios2">
                            {Text.form.sort.card}
                        </label>
                    </div>
                </div>
                <button className="btn btn-primary">
                    {Text.form.buy}
                </button>
            </form>
        </div>
    );
}

export default OrderForm;