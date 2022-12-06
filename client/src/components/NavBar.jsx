import React from "react";
//import { useDispatch,} from "react-redux";
import { Link } from "react-router-dom";
import img from "../images/imagen1.png";
import "./NavBar.css"

export default function NavBar() {

    return (
        <div className="navbar">
            
            <img className="imagen-pokedex" src={img}/>
            <Link className="link-nav" to={'/create'}>Crear Pokemon  </Link>
            <Link className="link-nav" to={'/contacts'}>  Contactos</Link>
            
        </div>
    )
}