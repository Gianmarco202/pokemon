import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../actions";
import { Link } from "react-router-dom"
import "./Detail.css"

export default function Detail(props) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDetail(props.match.params.id));
    },[])

    const pokemon = useSelector((state) => state.detail)
    const detail = pokemon &&  pokemon[0]

    console.log(detail,"detail")
    return (
        <div>
            <Link className="inicio-home" to="/home">Volver</Link>
            <h2 className="title">Estadisticas</h2>
            {
                detail && Object.keys(detail).length>0? 
                //pokemon && pokemon.length === 1 ?
                <div className="detail-card">
                    <img className="imagen-detail" src={pokemon[0].image} alt="Not found"/>

                    <div className="detail-card-estadistics">
                        <h3>Nombre: {pokemon[0].name}</h3> 
                        <h3>ID: {pokemon[0].id}</h3>
                        <h3>Hp: {pokemon[0].hp}</h3>
                        <h3>Ataque: {pokemon[0].attack}</h3>
                        <h3>Defensa: {pokemon[0].defense}</h3>
                        <h3>Velocidad: {pokemon[0].speed}</h3>
                        <h3>Altura: {pokemon[0].height}</h3>
                        <h3>Likes: {pokemon[0].likes} </h3>
                        <h3>Peso: {pokemon[0].weight}</h3>
                        <h3>Tipos: {
                            pokemon[0].types && pokemon[0].types.map(obj => <span className="card-type">
                                {obj.name}
                            </span>)
                        }</h3>
                    </div>

                </div>
                :
                <p>"Cargando..."</p>
            }
        </div>
    )
}