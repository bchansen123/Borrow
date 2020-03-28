import React from "react";
import "./index.css";

function ViewItem() {
    
        return (
            
                <div className="row">
                    <div className="col-10">
                    </div>
                    <div className="col-2 ">
                        <a href="/1" className="">
                            <button type="button" className="btn btn-info pl-4 pr-4 pt-1 pb-1 view-item float-right">
                                View Item
                            </button>
                        </a>
                    </div>
                </div>
            
        )
    
}

export default ViewItem;