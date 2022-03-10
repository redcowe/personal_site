import React from "react";
import BodyRight from "./BodyRight/BodyRight";
import BodyCenter from "./BodyCenter/BodyCenter";
import './Body.css'

export default function Body() {
    return (
        <div className="body">
            <div className="body-container">
                <BodyCenter />    
            </div>
            <BodyRight />
        </div>
    )
}

//https://coolors.co/db5461-191516-b23a48-7e78d2-eff7ff