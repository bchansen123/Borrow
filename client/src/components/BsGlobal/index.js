import React from "react";

export function Container() {
    return (
    <div className="container">
        
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