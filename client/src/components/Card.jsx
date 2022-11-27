import React from "react";

export default function Card({image, name, type}) {
    return (
        <div>
            <img src={image} alt= "image not found"/>
            <h3>{name}</h3>
            <h4>{type}</h4>
        </div>
    )
}