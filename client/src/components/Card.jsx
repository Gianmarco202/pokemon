import React from "react";
import "./Card.css"

export default function Card({image, name, type}) {
    return (
        <div className="card">
            <img className="imagen" src={image} alt= "image not found" />
            <h2>{name}</h2>
            <h4>{ type }</h4>
            
            
        </div>
    )
}