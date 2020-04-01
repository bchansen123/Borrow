import React, {Component} from "react";
import API from "../utils/API";
import ViewItem from "../components/ViewItem";
import ItemBox from "../components/ItemBox";

class Inventory extends Component {

    state = {
        items:  [],
        username: ""
    }

    componentDidMount() {
        this.loadInventory();
    };

    checkUser = () => {
        // if(loginSuccess) {
        //     // this.setState({user: })
        // }
    }

    loadInventory = () => {
        API.getInventory(1)
        .then(res =>
            {this.setState({items: res.data})
        console.log(res);
        })
            .catch(err => console.log(err));
            
    };

    render () {
        return (
            
        <React.Fragment>
            {this.state.items.map(item => (
                <ItemBox 
                key={item.title}
                title={item.title}
                image={item.image}
                price={item.price}
                category={item.category}
                description={item.description}
                />
            ))}
      </React.Fragment>
        );
    }
}

export default Inventory;