import React from "react";
import NavBar from "../NavBar";
import "../../assets/styles/global.css"

export default function Layout(props) {
    return (
        <div className="container">
            <div className="container-main">
                <NavBar/>
            </div>
            <div className="content">{props.children}</div>
        </div>
    )
}