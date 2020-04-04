import React from "react";
import "./index.css";

function ViewItem() {  
    return (
        <a href="/1" className="p-1">
            <button type="button" className="btn btn-info pl-4 pr-4 pt-1 pb-1 view-item">
                View Item
            </button>
        </a> 
    )  
}
export default ViewItem;