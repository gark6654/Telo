import React, { useContext } from 'react';
import { SiteText } from '../../App';

// Site icons.
import {Shop, Order, Delivery} from '../../Icons';

function OrderAndDelivery(props) {
    const Text = useContext(SiteText).content.pages.orderDelivery;

    return (
        <div className="OrderAndDelivery container-fluid">
            <div className="container">
                <div className="alert alert-info" role="alert">
                    <h3>
                        {Text.title}
                        <img src={Shop} alt="icon" width="30" height="30" />
                    </h3>
                </div>
                <div className="container-fluid">
                    <article className="container">
                        <h4>{Text.subTitle}</h4>
                        <div className="alert alert-success">
                            <h5>{Text.desc}</h5>
                        </div>
                        <h4>
                            {Text.onlineOrder.title}
                            <img src={Order} alt="icon" width="35" height="35" />
                        </h4>
                        <ol>
                            <li>
                                <p>{Text.onlineOrder.t1}</p>
                            </li>
                            <li>
                                <p>{Text.onlineOrder.t2}</p>
                            </li>
                            <li>
                                <p>{Text.onlineOrder.t3}</p>
                            </li>
                            <li>
                                <p>{Text.onlineOrder.t4}</p>
                            </li>
                            <li>
                                <p>{Text.onlineOrder.t5}</p>
                            </li>
                        </ol>
                        <h4>
                            {Text.orderTasks.title}
                            <img src={Delivery} alt="icon" width="35" height="35" />
                        </h4>
                        <p>
                            {Text.orderTasks.desc}
                        </p>
                    </article>
                </div>
            </div>
        </div>
    );
}

export default OrderAndDelivery;