import React, {Component} from "react";
// import "./index.css";
import ViewItem from '../ViewItem';

export function itemInfo ({children}) {
    return {children};
}
class SearchPage extends Component {
    render () {       
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="row">
                            <div className="col-2">
                                <img src={this.props.image} alt="" className="image-sizing" />
                            </div>
                            <div className="col-4">
                                <div className="row">
                                    <div className="col-12"><h4 className="item-title">{this.props.title}</h4>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 category-text">User: {this.props.userId}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 price-text">Price: 
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 price-num">${this.props.price} per day
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="row">
                                    <div className="col-12 description-text">
                                        {this.props.description}
                                    </div>
                                </div>
                                <div className="row pt-5">
                                </div>
                                <div className="row">
                                    <div className="col-12 align-bottom">
                                        <ViewItem />
                                        <hr />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchPage;