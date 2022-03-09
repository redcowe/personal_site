import React from "react";
import './HeaderLeft.css'

export const HeaderLeft = () => {
    let url = 
    'https://avatars.githubusercontent.com/u/73677578?s=400&u=c9d3dc3ff2515e8f11bd3fd715eb3f6dc9f3f781&v=4';
    return (
       <div className="header-left-container">
            <div className="logo-container">
                <img src={url} alt="Logo" className="logo" />
            </div>   
        </div> 
    )
}