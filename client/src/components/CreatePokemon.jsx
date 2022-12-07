import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { postPokemons } from "../actions";
import { Link } from "react-router-dom";
import "./CreatePokemon.css"

export default function CreatePokemon() {

    const dispatch = useDispatch()    
    const types = useSelector( state => state.types)

    const [input, setInput] = useState({
        name:"",
        hp:"",
        attack:"",
        defense:"",
        speed:"",
        height:"",
        weight:"",
        types:[],
        image: "",
    })

    const [error, setError] = useState({
    })

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
    }

    const validate = (input) => {
        let error = {};

        let expRegName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
        let expRegHp = /^[0-9]+$/;
        let expRegAttack = /^[0-9]+$/;
        let expRegDefense = /^[0-9]+$/;
        let expRegSpeed = /^[0-9]+$/;
        let expRegHeight = /^[0-9]+$/;
        let expRegWeight =/^[0-9]+$/;

        if(!input.name.trim()){
            error.name ="El campoo 'Nombre' es requerido";
        }else if(!expRegName.test(input.name.trim())){
            error.name = "Solo se acepta letras"
        }
        if(!expRegHp.test(input.hp.trim())){
            error.hp = "Solo se acepta Numeros"
        }
        if(!expRegAttack.test(input.attack.trim())){
            error.attack = "Solo se acepta Numeros"
        }
        if(!expRegDefense.test(input.defense.trim())){
            error.defense = "Solo se acepta Numeros"
        }
        if(!expRegSpeed.test(input.speed.trim())){
            error.speed = "Solo se acepta Numeros"
        }
        if(!expRegHeight.test(input.height.trim())){
            error.height = "Solo se acepta Numeros"
        }
        
         if(!expRegWeight.test(input.weight.trim())){
            error.weight = "Solo se acepta numeros"
        }
        return error;
    }

    function handleSelect(e) {
        setInput({
            ...input,
            types: [...input.types, e.target.value]
        })
    }

    function  handleBlur(e) {
        handleChange(e)
        setError(validate(input))
    }

    let styles = {
        fontWeight: "bold",
        color:"#dc3545"
    }


    function handleSubmit(e) {
        e.preventDefault();

        setError(validate(input))
        dispatch(postPokemons(input))
        alert("Pokemon Creado")
        setInput({
            name:"",
            hp:"",
            attack:"",
            defense:"",
            speed:"",
            height:"",
            weight:"",
            types:[],
            image: "",
        })
    }

    return (
        <div className="formulario">
            <Link className="link-inicio" to={"/home"}>Inicio</Link>

            <form className="create-form" onSubmit={(e) => handleSubmit(e)} noValidate >
            <h1 className="create-title">Crear Pokemon</h1>
                <div>
                    <input className="imputs"
                     type="text" 
                     value={input.name} 
                     name='name'
                     placeholder="Nombre"
                     onBlur={handleBlur} 
                     onChange={handleChange} required/>  
                     {error.name && <p style={styles}>{error.name}</p>}
                </div>
                <div>
                    <input className="imputs"
                     type="text" 
                     value={input.hp} 
                     name='hp' 
                     placeholder="Vida"
                     onBlur={handleBlur} 
                     onChange={handleChange} required/>  
                     {error.hp && <p style={styles}>{error.hp}</p>}
                </div>
                <div>
                    <input className="imputs"
                     type="text" 
                     value={input.attack} 
                     name='attack' 
                     placeholder="Ataque"
                     onBlur={handleBlur} 
                     onChange={handleChange} required/>  
                     {error.attack && <p style={styles}>{error.attack}</p>}
                </div>
                <div>
                    <input className="imputs"
                     type="text" 
                     value={input.defense} 
                     name='defense' 
                     placeholder="Defensa"
                     onBlur={handleBlur} 
                     onChange={handleChange} required/>  
                     {error.defense && <p style={styles}>{error.defense}</p>}
                </div>
                <div>
                    <input className="imputs"
                     type="text" 
                     value={input.speed} 
                     name='speed' 
                     placeholder="Velocidad"
                     onBlur={handleBlur} 
                     onChange={handleChange} required/>  
                     {error.speed && <p style={styles}>{error.speed}</p>}
                </div>
                <div>
                    <input className="imputs"
                     type="text" 
                     value={input.height} 
                     name='height' 
                     placeholder="Altura"
                     onBlur={handleBlur} 
                     onChange={handleChange} required/>  
                     {error.height && <p style={styles}>{error.height}</p>}
                </div>
                <div>
                    <input className="imputs"
                     type="text" 
                     value={input.weight} 
                     name='weight' 
                     placeholder="Peso"
                     onBlur={handleBlur} 
                     onChange={handleChange} required/>  
                     {error.weight && <p style={styles}>{error.weight}</p>}
                </div>
                <div>
                    <input className="imputs"
                    type="url"
                    onChange={handleChange}
                    value={input.image}
                    name='image'
                    placeholder="Imagen"
                     />
                </div>

                <div>
                    <select onChange={ e => handleSelect(e)}>
                        <option value={'all'}>Tipos</option>
                        {types?.map((e) =>(
                        <option key={e.id} value={e.name}>{e.name}</option>
              ) )}
                     </select>
                </div>
                <button className="botons" type="submit">Crear</button>
                
            </form>
        </div>
        
    
    )
}