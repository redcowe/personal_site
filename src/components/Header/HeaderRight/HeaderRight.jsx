import React from "react"
import './HeaderRight.css'

export function HeaderRight() {
    return (
        <div className="header-right-container">
            <ul className="header-link-list">
                <li className="header-link"><a href="projects">Projects</a></li>
                <li className="header-link"><a href="blog">Blog</a></li>
            </ul>
        </div>
    )
}