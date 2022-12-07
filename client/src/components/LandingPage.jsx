import React from "react";
import {Link} from "react-router-dom";
import "./LandingPage.css"

export default function LandingPage() {
    return (
        <div>

            <div className="landing">
                <Link className="landing-title" to={"/home"}>
                   <h2>Bienvenidos</h2>
                </Link>
                </div>
        </div>    
        
    )
}