import React, {Component} from "react";
import {Link} from "react-router-dom";
import API from "../utils/API";
import Nav from "../components/Nav";
import SearchItems from "../components/SearchItems";
import {Container, ContainerFlex} from "../components/BsGlobal";
import UserMenu from "../components/UserMenu";



const queryString = require("query-string");




class AddPage extends Component {

    state = {
        category: "",
        price: "",
        title: "",
        description: "",
        city: "",
        state: "",
        selectedFile: ""
    }

    componentDidMount() {
        this.loadItems();
    }

    loadItems = () => {
        API.getAll();
    }

    fileSelectedHandler = event => {
        this.setState({ selectedFile: event.target.files[0]});
    }

    fileUploadHandler = () => {

    }

    addItemHandler = event => {
        event.preventDefault();
        API.saveItem ({
            userId: 2,
            image: "google.com",
            active: true,
            categoryId: 45,
            itemId: 1223,
            category: this.state.category,
            price: this.state.price,
            title: this.state.title,
            description: this.state.description,
            city: this.state.city,
            state: this.state.state
        })
        .then(console.log(this.state))
    }

    handleCategory = event => {
        this.setState(
            {category: event.target.value}
        );
    };

    handlePrice = event => {
        this.setState(
            {price: event.target.value}
        );
    };

    handleTitle = event => {
        this.setState(
            {title: event.target.value}
        );
    };

    handleDescription = event => {
        this.setState(
            {description: event.target.value}
        );
    };

    handleCity = event => {
        this.setState(
            {city: event.target.value}
        );
    };

    handleState = event => {
        this.setState(
            {state: event.target.value}
        );
    };


    render () {
        return (
            
        <React.Fragment>
            <UserMenu />
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
                    <input type="text" className="form-control signIn mr-2 ml-2" placeholder="Saw" aria-label="Username" aria-describedby="basic-addon1" onChange={this.handleCategory} value={this.state.category} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 input-group mb-3">
                    Price
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 input-group mb-3">
                    <input type="text" className="form-control signIn mr-2 ml-2" placeholder="Saw" aria-label="Username" aria-describedby="basic-addon1" onChange={this.handlePrice} value={this.state.price} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 input-group mb-3">
                    Title
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 input-group mb-3">
                    <input type="text" className="form-control signIn mr-2 ml-2" placeholder="Saw" aria-label="Username" aria-describedby="basic-addon1" onChange={this.handleTitle} value={this.state.title} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 input-group mb-3">
                    Description
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 input-group mb-3">
                    <input type="text" className="form-control signIn mr-2 ml-2" placeholder="Saw" aria-label="Username" aria-describedby="basic-addon1" onChange={this.handleDescription} value={this.state.description} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 input-group mb-3">
                    City
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 input-group mb-3">
                    <input type="text" className="form-control signIn mr-2 ml-2" placeholder="Saw" aria-label="Username" aria-describedby="basic-addon1" onChange={this.handleCity} value={this.state.city} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 input-group mb-3">
                    State
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 input-group mb-3">
                    <input type="text" className="form-control signIn mr-2 ml-2" placeholder="Saw" aria-label="Username" aria-describedby="basic-addon1" onChange={this.handleState} value={this.state.state} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 input-group mb-3">
                    Upload Photo
                    </div>
                </div>
                <div className="row">
                    <div className="col-2 input-group mb-3">
                    <form action="/upload" method="POST" encType="multipart/form-data"> 
                    <div className="mb-3">
                    <input type="file" className="input-group" name="file" id="file" onChange={this.fileSelectedHandler} />
                    </div>
                    </form>
                    </div>
                </div>
                <div className="row">
                    <div className="col-11"></div>
                    <div className="float-right">
                    <Link to="/upload">
                    <input type="submit" value="Submit" className="btn btn-info col-12 mb-3" onClick={this.addItemHandler} />
                    </Link>
                    </div>
                    </div>
            </div>
            </Container>
      </React.Fragment>
        );
    }
}

export default AddPage;