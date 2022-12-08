import React from "react";
import "./Card.css"

export default function Card({image, name, types}) {
    return (
        <div className="card">
            <img className="imagen" src={image} alt= "image not found" />
            <h2 className="card-name">{name}</h2>
            {
                types && types.map(obj => <h3>
                    {obj.name}
                </h3>)
            }
            
            
        </div>
    )
}