import React from 'react';

function OrderForm(props) {
    return (
        <div className="OrderBox">
            <h2>Order Now</h2>
            <form>
                <div className="form-row">
                    <div className="col">
                        <span>First Name:</span>
                        <input required type="text" className="form-control" placeholder="John" />
                    </div>
                    <div className="col">
                        <span>Last Name:</span>
                        <input required type="text" className="form-control" placeholder="Whick" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="col">
                        <span>Phone:</span>
                        <input required className="form-control" type="text" placeholder="+374000000" defaultValue={"+374"} />
                    </div>
                    <div className="col">
                        <span>Address:</span>
                        <input required className="form-control" type="text" placeholder="+374000000" />
                    </div>
                </div>
                <div className="PaymentSort form-group">
                    <h4>Payment Sort</h4>
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
                            Cash
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
                            Card
                        </label>
                    </div>
                </div>
                <button className="btn btn-primary">
                    Buy
                </button>
            </form>
        </div>
    );
}

export default OrderForm;