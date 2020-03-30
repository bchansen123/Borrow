import React from "react";
// import "./index.css";

function DeleteItem() { 
    return (
        <a href="/1" className="p-1">
            <button type="button" className="btn btn-danger pl-4 pr-4 pt-1 pb-1 view-item">
                Delete Item
            </button>
        </a>
    )  
}
export default DeleteItem;