import React from "react";
import locationIcon from "../images/location-icon.png";
import "../styles/Card.css";

export default function Card(props){
    return(
        <div className="card">
            <img src={props.imageUrl} alt="Beauty" className="feature-img"></img>
            <div>
                <div className="location-link">
                    <img src={locationIcon} alt="Location"></img>
                    <p className="location common-color-1">{props.location}</p>
                    <a href="https://goo.gl/maps/1DGM5WrWnATgkSNB8" target="_blank" rel="noopener noreferrer" className="link">View on Google Maps</a>
                </div>
                <p className="title common-color-1">{props.title}</p>
                <p className="date common-color-1">{props.startDate} - {props.endDate}</p>
                <p className="description common-color-1">{props.description}</p>
            </div>
        </div>
    )
}