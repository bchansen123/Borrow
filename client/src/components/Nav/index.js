import React from "react";
import "./Nav.css";
// import logo from '../../borrow.png';
import { Container } from "../BsGlobal";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="container-flex">
      <div className="row">
        <div className="col-11 shadow">
          <form className="form-inline col-9">
            <Link to="/">
              <img src="" className="m-3" width="20px" alt="" />
            </Link>
            <div className="input-group shadow bg-white rounded col-6">
              <span className="input-group-addon align-middle mr-1 navigation">
                What do you need?
              </span>
              <input
                type="text"
                className="form-control rounded-left navigation navbar-shadow"
                placeholder="Table Saw"
              ></input>
              <input
                type="text"
                className="form-control col-3 navigation navbar-shadow"
                placeholder="Zip Code"
              ></input>
            </div>
          </form>
        </div>
        <div className="col-1">
          <img
            className="img_card rounded float-right mt-3 mr-3"
            src="https://via.placeholder.com/30"
            alt="Userimage"
          />
        </div>
      </div>
    </div>
  );
}

export default Nav;
