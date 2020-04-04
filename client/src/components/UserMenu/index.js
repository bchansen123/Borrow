import React, {Component} from "react";
import "./index.css";
import logo from "./borrow.png";

class UserMenu extends Component {
    render () {
        return (
            <div className="navbar navbar-expand-lg bg-white border-bottom">
                <a className="navbar-brand" href="/home"><img src={logo} className=" logo-icon" alt=""/></a>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link links" href="/inbox">Inbox</a> 
                    </li>
                    <li className="nav-item">
                        <a className="nav-link links" href="/inventory">Inventory</a> 
                    </li>
                    <li className="nav-item">
                        <a className="nav-link links" href="/payments">Payments</a> 
                    </li>
                    <li className="nav-item">
                        <a className="nav-link links" href="/profile">Profile</a> 
                    </li>
                    <li className="nav-item">
                        <a className="nav-link links" href="/preferences">Preferences</a> 
                    </li>
                </ul>
                <img className="img_card rounded" src="https://via.placeholder.com/30" alt="Userimage" />
                <ul className="nav">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="/1" role="button">Link</a>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="/2">placeholder</a>
                            <a className="dropdown-item" href="/3">placeholder</a>
                            <a className="dropdown-item" href="/4">placeholder</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="/5">placeholder</a>
                        
                        </div>
                    </li>
                </ul>
                
            </div>
        )
    }
}

export default UserMenu;