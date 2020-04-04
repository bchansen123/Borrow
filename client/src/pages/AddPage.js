import React, {Component} from "react";
import {Link} from "react-router-dom";
import API from "../utils/API";
import Nav from "../components/Nav";
import SearchItems from "../components/SearchItems";
import {Container, ContainerFlex} from "../components/BsGlobal";
const queryString = require("query-string")



class AddPage extends Component {

    state = {
        searchItems:  [],
        category: "",
        price: "",
        title: "",
        description: "",
        city: "",
        state: "",
        selectedFile: ""
    }

    fileSelectedHandler = event => {
        this.setState({ selectedFile: event.target.files[0]});
    }

    fileUploadHandler = () => {

    }

    render () {
        return (
            
        <React.Fragment>
            <Nav />
            <Container>
            <div className="col-12 card-modal rounded p-3 mt-3">
                <h3>Add an item</h3>
                <hr />
                <div className="row">
                    <div className="col-12 input-group mb-3">
                    Category
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 input-group mb-3">
                    <input type="text" className="form-control signIn mr-2 ml-2" placeholder="Saw" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 input-group mb-3">
                    Price
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 input-group mb-3">
                    <input type="text" className="form-control signIn mr-2 ml-2" placeholder="Saw" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 input-group mb-3">
                    Title
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 input-group mb-3">
                    <input type="text" className="form-control signIn mr-2 ml-2" placeholder="Saw" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 input-group mb-3">
                    Description
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 input-group mb-3">
                    <input type="text" className="form-control signIn mr-2 ml-2" placeholder="Saw" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 input-group mb-3">
                    City
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 input-group mb-3">
                    <input type="text" className="form-control signIn mr-2 ml-2" placeholder="Saw" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 input-group mb-3">
                    State
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 input-group mb-3">
                    <input type="text" className="form-control signIn mr-2 ml-2" placeholder="Saw" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 input-group mb-3">
                    Upload Photo
                    </div>
                </div>
                <div className="row">
                    <div className="col-2 input-group mb-3">
                    <input type="file" className="form-control signIn mr-2 ml-2" onChange={this.fileSelectedHandler} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-11"></div>
                    <div className="float-right">
                    <button type="submit" value="Submit" className="btn btn-info col-12 mb-3" onClick={this.fileUploadHandler}>Submit</button> 
                    </div>
                    </div>
            </div>
            </Container>
      </React.Fragment>
        );
    }
}

export default AddPage;