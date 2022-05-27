import React from "react";
import { HeaderLeft } from "./HeaderLeft/HeaderLeft";
import { HeaderRight } from "./HeaderRight/HeaderRight";
import './Header.css'



export default function Header() {
    return(
        <>
            <section className="header">
                <HeaderLeft />
            </section>
        </>
    )
}
