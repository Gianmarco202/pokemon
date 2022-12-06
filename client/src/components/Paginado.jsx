import React from "react";
import "./Paginado.css"

export default function Paginado({pokemonsPerPage, allPokemons, paginado , page}) {
    const pageNumber = [];

    for (let i=1; i<=Math.ceil(allPokemons/pokemonsPerPage); i++){
        pageNumber.push(i)
    }

    return (
        <nav>
            <div className='paginado'>
            {   
                pageNumber.map((number,index) => {
                     return ( 
                        <button className="button-page" key={index} onClick={() => paginado(number)} >{number}
                        </button>
                     )
                })}
        </div>
        </nav>
    )
}