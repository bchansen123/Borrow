import React from "react";
import Borrow from "./borrow.png"
import "./top.css";
import background from "./home.jpg";


var backgroundStyle = {
    backgroundSize: "100%",
    height: "100vh",
    backgroundImage: "url("+background+")",
    backgroundRepeat: "no-repeat"

};

function HomeScreen() {
    return (
        <React.Fragment>
        <div className="container-fluid" style={backgroundStyle}>
            <div className="row pt-2">
                <div className="float-left col-2">
                <img src={Borrow} alt="" className="logo-icon" />
                </div>
                <div className="col-8">

                </div>
                <div className="col-2 float-right">
                    <a href="#" className="float-left links">Sign In</a>
                    <a href="#" className="float-right mr-5 links">Sign Up</a>
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
                    <div class="input-group mb-3">
                        <input type="text" className="form-control signIn mr-2 ml-2" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                    <div className="row">
                        <div className="col-6">
                        <span className="mb-2 ml-2 titles">Where?</span>
                        </div>
                        <div className="col-3">
                        <span className="mb-2 mr-1 titles">From?</span>
                        </div>
                        <div className="col-3">
                        <span className="mb-2 mr-1 titles">To?</span>
                        </div>
                    </div>
                    <div className="row pb-3">
                        <div className="input-group col-6">
                        
                        <input type="text" className="form-control signIn rounded ml-2" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                        <div className="input-group date col-3">
                        
                        <input type="date" className="form-control signIn rounded" placeholder="" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                        <div className="input-group date col-3">
                        
                        <input type="date" className="form-control signIn rounded mr-2" placeholder="" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-8"></div>
                        <div className="col-4">
                           <button type="submit" value="Submit" className="btn btn-info col-12 mb-3">Search</button> 
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

export default HomeScreen;