import React , {useEffect}from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch} from "react-redux";
import { getPokemons, getSearchPokemons } from "../actions";
import Card from "./Card";

export default function Home() {

    const dispatch = useDispatch();
    const allPokemons = useSelector((state) => state.pokemons)

    useEffect(() => {
        dispatch(getPokemons());
    },[])

    return (
        <div>
          <div>
            <select>
                <option value='type'>Tipo</option>
            </select>

            <select>
                <option value='exist'>Existente</option>
                <option value='crea'>Creado</option>
            </select>
            <select>
                <option value='asc'>Alfabetico A-Z</option>
                <option value='des'>Alfabetico Z-A</option>
                <option value='+-'>Ataque +-</option>
                <option value='-+'>Ataque -+</option>
            </select>
          </div>

          <div>
          {    
            
            allPokemons?.map( (poke) => {
                

                return (
                    <React.Fragment  key={poke.id}>
                  <Link  to={`/detail/${poke.id}`}>
                    <div>
                    <Card image={poke.image} name={poke.name} type={poke.type}  key={poke.id} />
                    </div>
                  </Link>
                </React.Fragment>
            )}
            )}

          </div>
          </div> 
    )

}