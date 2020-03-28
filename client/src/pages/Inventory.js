import React, {Component} from "react";
import API from "../utils/API";
import ViewItem from "../components/ViewItem";
import ItemBox from "../components/ItemBox";

class Inventory extends Component {

    state = {
        items:  [],
        itemId: "",
        active: "",
        title: "",
        price: "",
        category: "",
        image: "",
        description: ""
    }

    componentDidMount() {
        this.loadInventory();
    };

    loadInventory = () => {
        API.getInventory(1)
        .then(res =>
            {this.setState({items: res.data, itemId: "", active: "", title: "", price: "", category: "", image: "", description: ""})
        console.log(res);
        })
            .catch(err => console.log(err));
            
    };

    render () {
        return (
            
        <React.Fragment>
            {this.state.items.map(item => (
                <ItemBox>
                    <div className="row">
                        <div className="col-12"><h4>{item.title}</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">{item.price}
                        </div>
                    </div>
                    
                    <ViewItem />
                </ItemBox>
            ))}
      </React.Fragment>
        );
    }
}

export default Inventory;