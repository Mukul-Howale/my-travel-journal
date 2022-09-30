import React from "react";
import Globe from "../images/globe.png";
import "../styles/Header.css";

export default function Header(){
    return(
        <div className="header">
            <img src={Globe} alt="Globe"></img>
            <p>My Travel Journal</p>
        </div>
    )
}