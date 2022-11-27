import axios from "axios";

export function getPokemons() {
    return async (dispatch) => {
        let pedidoApi = await axios.get("http://localhost:3001/pokemons/getAll")
        dispatch({
            type: 'GET_POKEMONS',
            payload: pedidoApi.data
        });
        console.log(pedidoApi)
    }  
}

export function getSearchPokemons(name) {
    return async (dispatch) => {
        let searchName = await axios.get(`http://localhost:3001/pokemons/?name=${name}`)
        dispatch({
            type: 'GET_SEARCH_POKEMONS',
            payload: searchName.data
        })
    }
}