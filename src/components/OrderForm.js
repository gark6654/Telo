import React from 'react';

function OrderForm(props) {
    return (
        <div>
            <h1>Order Now</h1>
            <form>
                <div className="form-row">
                    <div className="col">
                        <input type="text" className="form-control" placeholder="First name" />
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Last name" />
                    </div>
                </div>
            </form>
        </div>
    );
}

export default OrderForm;