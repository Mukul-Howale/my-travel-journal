import React from "react";
import "../styles/Card.css";

export default function Card(props){
    return(
        <div className="card">
            <img src={props.imageUrl} alt="Beauty" className="feature-img"></img>
            <div className="card-details">
                <div className="location-link">
                    <p className="location"></p>
                    <a href="https://goo.gl/maps/1DGM5WrWnATgkSNB8" className="link">View on Google Maps</a>
                </div>
                <p className="title"></p>
                <p className="date"></p>
                <p className="description"></p>
            </div>
        </div>
    )
}