import React from "react";
import {Link} from "react-router-dom";
import "./LandingPage.css"

export default function LandingPage() {
    return (
        <div>

            <div className="landing">
                <Link to={'/home'} className="landing-title">
                   <h2>Bienvenidos</h2>
                   <p>Click Aqui</p>
                </Link>
                <Link className="landing-ingresar">Ingresar</Link>
                </div>
        </div>    
        
    )
}