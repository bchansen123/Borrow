import React from "react";
import './Nav.css';
import logo from '../../borrow.png';

function Nav() {
    return (
                <div className="col-6 shadow">
                    <form class="form-inline col-12">
                    <img src={logo} className="m-3" width="20px" alt="" />
                        <div className="input-group shadow bg-white rounded col-6">
                            <span className="input-group-addon align-middle mr-1 navigation">What do you need?</span>
                            <input type="text" class="form-control rounded-left navigation navbar-shadow" placeholder="Table Saw"></input>
                            <input type="text" class="form-control col-3 navigation navbar-shadow" placeholder="Zip Code"></input>
                        </div>
                        <div className="input-group col-2">
                        <span className="input-group-addon align-middle ml-1 mr-1 navigation">From</span>
                        <input type="text" class="form-control rounded-left navigation navbar-shadow" placeholder="2020-01-01"></input>
                        </div>
                        <div className="input-group col-2">
                        <span className="input-group-addon align-middle mr-1 navigation">To</span>
                        <input type="text" class="form-control rounded-left navigation navbar-shadow" placeholder="2020-01-01"></input>
                        </div>
                        <div className="col-3"></div>
                    </form>
                </div>
    )
}

export default Nav;