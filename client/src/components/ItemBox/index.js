import React, {Component} from "react";
import "./index.css";
import ViewItem from '../ViewItem';
import EditItem from "../EditItem";
import DeleteItem from "../DeleteItem";

export function itemInfo ({children}) {
    return {children};
}
export default function ItemBox(props) {
    console.log(props); 
    // title={item.title}
    // image={item.image}
    // price={item.price}
    // category={item.category}
    // description={item.description}

        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 card-modal rounded p-3 mt-3">
                        <div className="row">
                            <div className="col-2">
                                <img src={props.image} alt="" className="image-sizing" />
                            </div>
                            <div className="col-4">
                                <div className="row">
                                    <div className="col-12"><h4 className="item-title">{props.title}</h4>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 category-text">Category: {props.category}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 price-text">Listed Price: 
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 price-num">${props.price} per day
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="row">
                                    <div className="col-12 description-text">
                                        {props.description}
                                    </div>
                                </div>
                                <div className="row pt-5">
                                </div>
                                <div className="row">
                                    <div className="col-12 align-bottom">
                                        <DeleteItem />
                                        <EditItem />
                                        <ViewItem />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
        
}

 