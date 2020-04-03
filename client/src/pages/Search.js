import React, {Component} from "react";
import API from "../utils/API";
import Nav from "../components/Nav";
import SearchItems from "../components/SearchItems";
import {Container} from "../components/BsGlobal"
const queryString = require("query-string")


class Search extends Component {

    state = {
        searchItems:  [],
        searchTerm: "",
        zip: ""
    }

    parser() {
        const parsed = queryString.parse(this.props.location.search);
        this.setState({searchTerm: parsed.search}, () => {
            this.searchInventory();
            console.log(this.state.searchTerm);
        });
        
        };

    componentDidMount() {
        this.parser();
    };

    searchInventory = () => {
        API.searchInventory(this.state.searchTerm)
        .then(res =>
            {this.setState({searchItems: res.data})
            
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