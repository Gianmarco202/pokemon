import React from "react";
import {Link} from "react-router-dom";

export default function LandingPage() {
    return (
        <div>
            <div>
                <Link to={"/home"}>
                    <h1>POKEMONES</h1>
                </Link>
            </div>
        </div>
    )
}