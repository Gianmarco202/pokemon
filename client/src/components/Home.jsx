import React , {useEffect, useState}from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch} from "react-redux";
import { getPokemons,getTypes, orderPokemons , filterTypes, filterCreatedApi} from "../actions";
import Card from "./Card";
import SearchBar from "./SearchBar";
import Paginado from "./Paginado";
import "./Home.css"
import NavBar from "./NavBar";

export default function Home() {
    const dispatch = useDispatch();
    const allPokemons = useSelector((state) => state.pokemons)
    const types = useSelector((state) => state.types)

    const [order, setOrder] = useState('')
    const [page, setPage] = useState(1);
    const [pokemonsPerPage, setPerPage] = useState(12);
    const indexLastPokemon =  page * pokemonsPerPage;
    const indexFirstPokemon = indexLastPokemon - pokemonsPerPage;
    const currentPokemon = allPokemons ? allPokemons?.slice(indexFirstPokemon,indexLastPokemon) : []

    const paginado = (pageNumber) => {
      setPage(pageNumber)
    }

    useEffect(() => {
        dispatch(getPokemons());
        dispatch(getTypes())
    },[])

    function handleSelectFilter(e) {
      dispatch(filterTypes(e.target.value))
      console.log(e.target.value, "handleSelectFilter")
    }
    
    function handleFilterCreatedApi(e) {
      dispatch(filterCreatedApi(e.target.value))
    }

    function handleSort(e) {
      e.preventDefault(); 
      dispatch(orderPokemons(e.target.value))
      setOrder(e.target.value)
    }
   // console.log(types)
    return (
      <div className="home">
        <NavBar/>
        <br/>
        <div className="selects">
          <div>
          <select className="selects-1" onChange={handleSelectFilter}>
              <option value={'all'}>Todos Los Tipos</option>
              {types?.map((type) =>(
                <option key={type.id} value={type.name}>{type.name}</option>
                ) )}
          </select>
           <i></i>
          </div>

          <div className="select-2">
          <select onChange={e => handleFilterCreatedApi(e)}>
              
              <option value={'all'} >Todos Api/Creat</option>
              <option value='existent'>Existente</option>
              <option value='created'>Creado</option>
          </select>
           <i></i>
          </div>
          <div>
          <select className="selects-3" onChange={e => handleSort(e)}>
              <option>Ordernar por...</option>
              <option  value='asc'>Alfabetico A-Z</option>
              <option value='des'>Alfabetico Z-A</option>
              <option value='+-'>Ataque +-</option>
              <option value='-+'>Ataque -+</option>
          </select>
           <i></i>

          </div>
        </div>
        <SearchBar/>
        <Paginado
          pokemonsPerPage={pokemonsPerPage}
          allPokemons={allPokemons?.length}
          paginado={paginado}
        />
        <br/>
        <div className="box">
          {    
            
            currentPokemon?.map( (poke) => {
                

                return (
                    <React.Fragment  key={poke.id}>
                  <Link className="link" to={`/detail/${poke.id}`}>
                    <div className="box-pokemon">
                    <Card image={poke.image} name={poke.name} types={poke.types} key={poke.id} />
                    </div>
                  </Link>
                </React.Fragment>
            )}
          )}
        </div>
      </div> 
    )

}