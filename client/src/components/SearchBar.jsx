import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { getSearchPokemons } from "../actions";
import "./SearchBar.css"

export default function SearchBar() {

    const dispatch = useDispatch();
    const [name,  setName] = useState("");

    function handleInputChange(e) {
        e.preventDefault()
        setName(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        dispatch(getSearchPokemons(name))

    }

    return (
        <div className="search-bar">
            <input className="input" type="text" placeholder="Buscar Pokemon..." onChange={(e) => handleInputChange(e)}/>
            <button className="button" type="submit" onClick={(e) => handleSubmit(e)}>Buscar</button>
        </div>

    )

}