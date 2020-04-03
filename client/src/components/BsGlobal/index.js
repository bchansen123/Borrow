import React from "react";
import "./index.css";

export function Container(props) {
    return (
    <div className="container bg-color">
       {props.children} 
    </div>
    );
}

export function ContainerFlex(props) {
    return (
    <div className="container-flex bg-color">
       {props.children} 
    </div>
    );
}
    
    export function Row() {
        return (
            <div className="row">
                
            </div>
        );
    }

    export function Col({size}) {
        return (
            <div className={size
            .split(" ")
            .map(size => "col-" + size)
            .join(" ")
            }
            >
                
            </div>
        );
    }