import React, {Component} from "react";
import {Link} from "react-router-dom";
import API from "../utils/API";
import Nav from "../components/Nav";
import SearchItems from "../components/SearchItems";
import {Container, ContainerFlex} from "../components/BsGlobal";
import logo from '../borrow.png';
const queryString = require("query-string")



class Search extends Component {

    state = {
        searchItems:  [],
        searchTerm: "",
        city: "",
        refresh: ""
    }

    parser() {
        const parsed = queryString.parse(this.props.location.search);
        console.log(parsed);
        this.setState({searchTerm: parsed.search, city: parsed.city}, () => {
            this.searchInventory(this.state.searchTerm, this.state.city);
            console.log(this.state.searchTerm, this.state.city);
        });
        
        };

    componentDidMount() {
        this.parser();
    };

    searchInventory = () => {
        API.searchInventory(this.state.searchTerm, this.state.city)
        .then(res =>
            {this.setState({searchItems: res.data})
            console.log(this.state.searchItems)
        })
            .catch(err => console.log(err));
            
    };

    render () {
        return (
            
        <React.Fragment>
            <Nav />
            <Container>
            <div className="col-12 card-modal rounded p-3 mt-3">
            <h3>Items</h3>
            
            {this.state.searchItems.map(item => (
                <SearchItems 
                key={item.title}
                title={item.title}
                image={item.image}
                price={item.price}
                category={item.category}
                description={item.description}
                />
            ))}
            </div>
            </Container>
      </React.Fragment>
        );
    }
}

export default Search;