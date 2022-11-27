import React, { useEffect } from "react";
import { useDispatch,} from "react-redux";
import { Link } from "react-router-dom";

export default function Navbar() {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPokemons());
    },[])

    function handleClick(e) {
        e.preventDefault();
        dispatch(getPokemons());
    }

    return (
        <div>
            <h3 onClick={handleClick}>Inicio</h3>
            <Link to={'/pokemon'}>Crear Pokemon</Link>
            <h3></h3>
        </div>
    )
}