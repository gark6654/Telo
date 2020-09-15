import React from 'react';
import { Link } from 'react-router-dom';
import Add from '../media/add.svg';
import List from '../media/list.svg';
import Edit from '../media/edit.svg';
import Delete from '../media/delete.svg';

function ToolBox(props) {
    return (
        <div className="toolBox container">
            <h3 className="alert alert-success">
                Ընտրիր ծառայությունը
            </h3>
            <div className="tools row">
                <button className="col-md-3">
                    <Link to="/AddItem">
                        <div>
                            <img src={Add} alt="icon" width="100" height="100" />
                            <h5>Ավելացնել ապրանք</h5>
                        </div>
                    </Link>
                </button>
                <button className="col-md-3">
                    <Link to="/Category">
                        <div>
                            <img src={List} alt="icon" width="100" height="100" />
                            <h5>Փոփոխել Կատեգորիաները</h5>
                        </div>
                    </Link>
                </button>
                <button className="col-md-3">
                    <div>
                        <img src={Edit} alt="icon" width="100" height="100" />
                        <h5>Փոփոխել ապրանք</h5>
                    </div>
                </button>
                <button className="col-md-3">
                    <div>
                        <img src={Delete} alt="icon" width="100" height="100" />
                        <h5>Ջնջել ապրանք</h5>
                    </div>
                </button>
            </div>
        </div>
    )
}

export default ToolBox;