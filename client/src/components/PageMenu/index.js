import React, {Component} from "react";
import "./index.css";

class PageMenu extends Component {
    render () {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 ">
                        <ul className="nav">
                            <li className="nav-item">
                                <a className="nav-link page-links" href="#">Parameter 1</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link page-links" href="#">Parameter 2</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link page-links" href="#">Parameter 3</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default PageMenu;