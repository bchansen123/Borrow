import React, {Component} from "react";
import HomeScreen from "../components/HomeScreen";
import Nav from "../components/Nav";
import API from "../../../../../../Downloads/UofU-VIRT-FSF-PT-09-2019-U-O-master/20-react/01-Activities/11-Stu_ReactRouter/Solved/client/src/utils/API";

class Inventory extends Component {

    state = {
        itemId:  [],
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
        API.getInventory()
        .then(res =>
            this.setState({itemId: res.data, active: "", title: "", price: "", category: "", image: "", description: ""})
            )
            .catch(err => console.log(err));
    };

    render () {
        return (
            
        <React.Fragment>
            <HomeScreen />
      </React.Fragment>
        );
    }
}

export default Inventory;