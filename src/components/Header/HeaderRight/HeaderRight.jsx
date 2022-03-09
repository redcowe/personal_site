import React from "react"
import './HeaderRight.css'

export function HeaderRight() {
    return (
        <div className="header-right-container">
            <ul className="header-link-list">
                <li className="header-link">About</li>
                <li className="header-link">Blog</li>
                <li className="header-link">Contact</li>
            </ul>
        </div>
    )
}