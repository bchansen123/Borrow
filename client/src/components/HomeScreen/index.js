import React, { Component } from "react";
import {Link} from "react-router-dom";
import Borrow from "./borrow.png"
import "./top.css";


class HomeScreen extends Component {

    state = {
        items: [],
        searchTerm: "",
        city: "" 
    
};

componentDidMount() {
    this.setState({searchTerm: ""});
}

handleName = event => {
    this.setState(
        {searchTerm: event.target.value}
    );
};

handleCity = event => {
    this.setState(
        {city: event.target.value}
    );
};



render() {
    return (
        <React.Fragment>
        <div className="container-fluid backgroundStyle">
            <div className="row pt-2">
                <div className="float-left col-2">
                    <Link to="/">
                    <img src={Borrow} alt="" className="logo-icon" />
                    </Link>
                </div>
                <div className="col-8">

                </div>
                <div className="col-2 float-right">
                    <Link to="/signin" className="float-left top-links">Sign In</Link>
                    <Link to="/signup" className="float-right mr-5 top-links">Sign Up</Link>
                </div>
            </div>
            <div className="row">
            <div className="container">
            <div className="row" height="1000px">
                <div className="col-4 card-modal rounded mt-5">
                    <h3 className="p-2">Use what you have. Borrow the rest.</h3>
                    <p className="p-2">Search thousands of items, from power tools to recreational equipment. Find the gear you need right now!</p>
                    <div className="mb-2">
                        <span className="mb-2 mr-2 ml-2">What do you need?</span>
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control signIn mr-2 ml-2" placeholder="Saw" aria-label="Username" aria-describedby="basic-addon1" onChange={this.handleName} value={this.state.searchTerm} />
                    </div>
                    <div className="row">
                        <div className="col-6">
                        <span className="mb-2 ml-2 titles">Where?</span>
                        </div>
                    </div>
                    <div className="row pb-3">
                        <div className="input-group col-6">
                        
                        <input type="text" className="form-control signIn rounded ml-2" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" onChange={this.handleCity} value={this.state.city} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-8"></div>
                        <div className="col-4">
                            <Link to={'/search/?search='+ this.state.searchTerm + `&city=` + this.state.city} >
                           <button type="submit" value="Submit" className="btn btn-info col-12 mb-3">Search</button> 
                           </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            </div>
        </div>
        
    </React.Fragment>
    )
}
}

export default HomeScreen;